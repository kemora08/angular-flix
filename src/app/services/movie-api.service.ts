import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private readonly URL = 'https://api.themoviedb.org/3/';
  private readonly API; KEY; '471506aa9f82987ac5122cda413b5522';
  API_KEY: string;
  constructor(private httpClient: HttpClient) { }

  get(path: string): Promise<any[]> {
    const params: HttpParams = new HttpParams()
     .append('api_key', this.API_KEY);

    return this.httpClient.get<any[]>('${this.URL}${Path}', {params}).toPromise();

  }
}
