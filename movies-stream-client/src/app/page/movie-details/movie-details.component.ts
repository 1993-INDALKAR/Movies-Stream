import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import  movieTrailer from 'movie-trailer';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FacebookService, InitParams,UIParams,UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie = {};
  streams = {};
  trailers = [];
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private _movies: MoviesService,config: NgbCarouselConfig
    ,private fb:FacebookService) {
            // customize default values of carousels used by this component tree
            // config.interval = 10000;
            config.wrap = false;
            config.keyboard = false;
            config.pauseOnHover = false;

            let initParams: InitParams = {
              appId: '616916972240559',
              xfbml: true,
              version: 'v2.8'
            };
        
            fb.init(initParams);
   }

   ngOnInit(): void {

    this.movie = this._movies.getMovieDetails();
    this.details(this.movie["id"]);
    this.getTrailer(this.movie["title"],this.movie["release_date"]);
    // console.log(this.movie);



  }

  async details(tmdId: Number) {
    await this._movies.getExtraMovieDetails(tmdId).subscribe(data => {

      let string = JSON.stringify(data);
      let movies = JSON.parse(string);
      console.log(JSON.parse(string));
      console.log(movies);
      this.movie["tagline"] = movies["tagline"];
      this.movie["runtime"] = movies["runtime"];
      this.movie["homepage"] = movies["homepage"];
      // console.log(this.movie["homepage"]);
      this.movie["posterPath"] = `https://image.tmdb.org/t/p/original/${movies["poster_path"]}`;
    });

   await  this._movies.getMovieStreams(this.movie["title"]).subscribe(data=>{
      let string = JSON.stringify(data);
      console.log(data);
      let results = JSON.parse(string)["results"];

      for(let data of results){
        let locations =  data["locations"];
        for(let location of locations){
          console.log(location);
          if(!this.streams.hasOwnProperty(location["id"]))
              this.streams[location["id"]] = location;
        }
      }
      
    });



  //  let streamMovies = await  this._movies.getMovieStreams(this.movie["title"]);
  //  console.log("streamMovies" + JSON.stringify(streamMovies));

  }

  async getTrailer(name:string,date){
    let trailers = await movieTrailer( name,{year: date.split("-")[0], multi: true} );
    console.log(trailers);
    let arrTrailers = trailers.map(x => {
      // console.log(x);
      return x.split("=")[1]
    }
     );
    console.log(arrTrailers);
    this.trailers = arrTrailers;
  }

  shareFb(ytid:string){
    // console.log(ytid);

    let params: UIParams = {
      href: `https://www.youtube.com/watch?v=${ytid}`,
      method: 'share',
      quote : `${this.movie['title']} streaming on ${Object.values(this.streams).join(',')}.`
    };

    this.fb.ui(params)
    .then((res: UIResponse) => console.log(res))
    .catch((e: any) => console.error(e));

  }

}
