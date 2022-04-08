import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  giphyApiUrl : string  = 'http://api.giphy.com/v1/gifs/search';

  apiKey: string = 'gKMg4xcPLp8iDFXSuRpCRF1Qy5eN3dbK';
  
  constructor(private http: HttpClient) { }

  getImagesFromGiphy(searchValue: string): Observable<any[]> {
    return this.http.get<any[]>(this.giphyApiUrl + '?q=' + searchValue + '&api_key=' + this.apiKey);
  }

  getOffsetImageFromGiphy(searchValue: string,offset:number): Observable<any[]> {
    return this.http.get<any[]>(this.giphyApiUrl + '?q=' + searchValue + '&api_key=' + this.apiKey + '&offset=' + offset);
  }
}
