import { Component } from '@angular/core';
import { MoviesService } from "./service/movies.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'movies-stream';
  pageNum: Number = 1;
  latestMovies;

  constructor(private _movies: MoviesService) { }


  ngOnInit(): void {

    //  this.getUpComingMovies();

  }

  getUpComingMovies() {
    this._movies.getLatestMovies(this.pageNum).subscribe(data => {
      let string = JSON.stringify(data)
      console.log(JSON.parse(string));
      this.latestMovies = JSON.parse(string);
    })
  }


}
