import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders , HttpParams} from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  movieDetails: Object = {};

  getLatestMovies(page) {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f848d939df21141fb5f4b49fe0d26ae8&language=en-US&page=${page}`);
    // .catch(this.errorHadler);
  }

  getExtraMovieDetails(id:Number){
    return this.http.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=f848d939df21141fb5f4b49fe0d26ae8&language=en-US`);
  }

  getMovieStreams(name:string){
    // let  headers = new  HttpHeaders();
    // headers.set("x-rapidapi-host", "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com");
    // headers.set("x-rapidapi-key", "bc45c5f85emsha8c58b604f00955p11a60bjsn1c9c7240598c");
    // headers.set("Content-Type", "application/json");
    // let params = new HttpParams();
    // params = params.append('term', name);
    let headers = {
      "x-rapidapi-host" : "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": "bc45c5f85emsha8c58b604f00955p11a60bjsn1c9c7240598c"
    }
    let params = {
      "term" : name
    }

    return this.http.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",{headers:headers,params:params});

    // let data = await axios({
    //   "method":"GET",
    //   "url":"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
    //   "headers":{
    //   "content-type":"application/octet-stream",
    //   "x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    //   "x-rapidapi-key":"bc45c5f85emsha8c58b604f00955p11a60bjsn1c9c7240598c"
    //   },"params":{
    //   "term":name
    //   }
    //   });
    //   console.log(data);

    //   return data;

  }

  setMovieDetails(movie) {
    this.movieDetails = movie;
  }

  getMovieDetails() {
    return this.movieDetails;
  }

}
