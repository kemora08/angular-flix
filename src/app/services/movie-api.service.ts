import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private readonly URL = 'https://api.themoviedb.org/3/search/multi';
  private readonly API_KEY = '471506aa9f82987ac5122cda413b5522';
  constructor(private httpClient: HttpClient) { }

  get(searchTerm: string): Promise<any> {
    const params: HttpParams = new HttpParams()
     .append('api_key', this.API_KEY)
     .append('query', searchTerm);

    // https://api.themoviedb.org/3/search/multi?query=test?api_key=...
    return this.httpClient.get<any[]>(this.URL, {params}).toPromise();
  }
}
