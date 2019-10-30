import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  constructor( private http: HttpClient ) { }

  private wordApiEndpoint: string = 'https://wordsapiv1.p.rapidapi.com/words/';

  relatedWordApi( word: string, mode: string ) {
    return this.http.get(this.wordApiEndpoint + encodeURIComponent(word) + "/" + encodeURIComponent(mode), {
      "headers": {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "81c29f4051msh1004bb8307e4948p17f135jsn8ffa2e7c4bb0"
      }
    });
  }
}
