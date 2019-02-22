import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IndexService {
  public httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    };
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError(error.error);
    } else {
      if (error.hasOwnProperty('error')) {
        return throwError(error.error);
      } else {
        return throwError({
          message: 'Internal Error'
        });
      }
    }
  }
  getList(): Observable<any> {
    return this.http.get(environment.baseUrl + `users`, this.httpOptions).pipe(catchError(this.handleError));
  }
  getAlbums(): Observable<any> {
    return this.http.get(environment.baseUrl + `albums`, this.httpOptions).pipe(catchError(this.handleError));
  }
  getPhotos(): Observable<any> {
    return this.http.get(environment.baseUrl + `photos`, this.httpOptions).pipe(catchError(this.handleError));
  }
}
