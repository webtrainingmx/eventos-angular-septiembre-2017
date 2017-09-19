import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class EventosService {

  constructor( private http: Http ) { }

  public getAllEvents(): Observable<Response> {
    const serviceURL = 'http://projects-api.webtraining.zone:3000/events';
    return this.http.get( serviceURL ).map( response => response.json() );
  }
}
