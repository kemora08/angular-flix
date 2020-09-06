import { Injectable } from '@angular/core';
import { MovieApiService } from './movie-api.service';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: APIService,
              private movieApiService: MovieApiService) { }

  searchResults: any[] = [];
  myMovieList: any[] = [];

  getSearchResults(): any[] {
    return this.searchResults;
  }

  getMovieList(): any[] {
    return this.myMovieList;
  }
async searchForMovies(searchTerm: string): Promise<void> {
    const response = await this.movieApiService.get(searchTerm);
    this.searchResults.length = 0;
    this.searchResults.push(...response.results);
  }

async loadMovieList(): Promise<void> {
  const response = await this.apiService.get();
  this.myMovieList.length = 0;
  this.myMovieList.push(...response);
 }

async saveToList(movie: any): Promise<void> {
  await this.apiService.post(movie);
  await this.loadMovieList();
 }
}
