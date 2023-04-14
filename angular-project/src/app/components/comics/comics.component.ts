import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Comics, Result } from 'src/app/models/comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements AfterViewInit {
  apiResult!: ComicsDatabase | null;
  displayedColumns: string[] = [
    'id',
    'thumbnail',
    'title',
    'description',
    'modified',
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
    this.apiResult = new ComicsDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.apiResult!.getComicsList(
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
 * Data source for the Comicss view.
 */
export class ComicsDatabase {
  constructor(private _httpClient: HttpClient) {}

  getComicsList(pageIndex: number, limit: number): Observable<Comics> {
    const offset = pageIndex * limit;
    const requestUrl = `${environment.apiBaseURL}/comics?apikey=${environment.apiPublicKey}&orderBy=title&offset=${offset}&limit=${limit}`;

    return this._httpClient.get<Comics>(requestUrl);
  }
}
