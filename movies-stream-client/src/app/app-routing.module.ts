import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingMoviesComponent } from "./page/page/upcoming-movies.component";
import { MovieDetailsComponent } from "./page/movie-details/movie-details.component";

const routes: Routes = [
  { path: 'upcoming-movies', component: UpcomingMoviesComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [UpcomingMoviesComponent];