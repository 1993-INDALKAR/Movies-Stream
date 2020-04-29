import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../service/movies.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  pageNum: Number = 1;
  latestMovies;
  totalPages: Number;
  // changeText: boolean = false;
  currentRate: Number = 3;
  moviesObj:Object = {};

  constructor(private _movies: MoviesService,private router: Router) { }

  ngOnInit(): void {

    console.log("On init upcoming movies")
    this.getUpComingMovies();

  }

  paginationNumber(pageNum: Number): void {
    this.pageNum = pageNum;
    this.getUpComingMovies();
  }

  redirect(id:Number){

    let movie = this.moviesObj[`${id}`];

    this._movies.setMovieDetails(movie);

    this.router.navigate(['./movie-details']);
  }

  getUpComingMovies() {
    this._movies.getLatestMovies(this.pageNum).subscribe(data => {
      let string = JSON.stringify(data)
      // console.log(JSON.parse(string));

      let movies = JSON.parse(string)["results"];
      // console.log(JSON.stringify(movies));
      this.moviesObj = movies.reduce(
        (obj, item) => Object.assign(obj, { [item.id]: item }), {});

      this.latestMovies = movies.reduce((rows, key, index) => (index % 4 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);

      this.totalPages = JSON.parse(string)["total_pages"];



      // console.log(this.latestMovies);
      // console.log(this.totalPages);
    })
  }

}
