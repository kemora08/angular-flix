import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';

  ngOnInit(): void {

    this.searchResults = this.movieService.getSearchResults();
    this.myMovieList = this.movieService.getMovieList();
    this.movieService.loadMovieList();
  }

}
