import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = 'https://mailthis.to/PSOGH'

  constructor(private _http: HttpClient) { }

  PostMessage(input: any): Observable<any> {
    return this._http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => response || null
      ),
      catchError((error: any) => {
        console.warn(error.responseText)
        console.log({ error });
        return error
      })
    )
  }
}
