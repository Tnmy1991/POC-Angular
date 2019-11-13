import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WikiSynonymApiService {

  constructor( private http: HttpClient ) { }

  private wikiEndpoint: string  = environment.rapid_api.wiki.endpoint;

  getWikiSynonym( term: string ): Observable<any> {
    return this.http.get<any>(this.wikiEndpoint + encodeURIComponent(term), {
      "headers": {
        "x-rapidapi-host": environment.rapid_api.wiki.host,
        "x-rapidapi-key": environment.rapid_api.key
      }
    }).pipe(
      catchError(this.handleError<any>('getWikiSynonym', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(error.error as T);
    };
  }
}
