import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Event, Result } from 'src/app/models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements AfterViewInit {
  apiResult!: EventDatabase | null;
  displayedColumns: string[] = [
    'id',
    'thumbnail',
    'title',
    'description',
    'start',
    'end',
  ];
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  offset: number = 0;
  limit: number = 10;
  total: number = 0;
  count: number = 0;
  data: Result[] = [];
  attributionHTML: string = '';

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.apiResult = new EventDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.apiResult!.getEventList(
            this.paginator.pageIndex,
            this.paginator.pageSize
          ).pipe(catchError(() => of(null)));
        }),
        map((res) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = res === null;

          if (res === null) {
            return [];
          }

          this.total = res.data.total;
          this.count = res.data.count;
          this.offset = res.data.offset;
          this.limit = res.data.limit;
          this.attributionHTML = res.attributionHTML;

          return res.data.results;
        })
      )
      .subscribe((data) => (this.data = data));
  }
}

/**
 * Data source for the Events view.
 */
export class EventDatabase {
  constructor(private _httpClient: HttpClient) {}

  getEventList(pageIndex: number, limit: number): Observable<Event> {
    const offset = pageIndex * limit;
    const requestUrl = `${environment.apiBaseURL}/events?apikey=${environment.apiPublicKey}&orderBy=name&offset=${offset}&limit=${limit}`;

    return this._httpClient.get<Event>(requestUrl);
  }
}
