import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

import { MessageService } from "../message/message.service";

const httpOptions = {
  headers : new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class HeroService {

  private herosUrl = "api/heroes";
  private heroUrl = "api/hero";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.log("fetched heroes");

    return this.http.get<Hero[]>(this.herosUrl).pipe(
      tap(heroes => this.log("heroes loaded")),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`);

    const heroUrl = `${this.herosUrl}/${id}`;

    return this.http.get<Hero>(heroUrl).pipe(
      tap(() => this.log(`hero ${id} loaded`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero : Hero) : Observable<Hero> {
    return this.http.put(this.herosUrl, hero, httpOptions).pipe(
      tap(()=>this.log(`updated hero ${hero.id}`)),
      catchError(this.handleError<any>("updateHero"))
    );
  }

  addHero(hero : Hero) : Observable<Hero>{
    return this.http.post<Hero>(this.herosUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`add hero id ${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero : Hero | number) : Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.herosUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(() => this.log(`deleted hero ${id}`)),
      catchError(this.handleError<Hero>("deleteHero"))
    );
  }

  searchHeroes(term : string) : Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }

    const url = `${this.herosUrl}?name=${term}`;

    return this.http.get<Hero[]>(url).pipe(
      tap(() => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>("searchHero",[]))
    );
  }

  private log(message: string): void {
    this.messageService.add(`HeroService : ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
