import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { EventsComponent } from './components/events/events.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', title: 'Dashboard', component: HomepageComponent }, // Default route
  { path: 'characters', title: 'Characters', component: CharactersComponent },
  { path: 'comics', title: 'Comics', component: ComicsComponent },
  { path: 'series', title: 'Series', component: SeriesComponent },
  { path: 'stories', title: 'Stories', component: StoriesComponent },
  { path: 'creators', title: 'Creators', component: CreatorsComponent },
  { path: 'events', title: 'Events', component: EventsComponent },
  { path: 'login', title: 'Login', component: SignInComponent },
  { path: 'register', title: 'Register', component: SignUpComponent },
  { path: '**', title: '404 Not found', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
