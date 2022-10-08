import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map, catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Siniestro } from '../shared/models/siniestro';

@Injectable({
  providedIn: 'root',
})
export class SiniestroService {

  baseURL = environment.apirestURL;

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getSiniestros(): Observable<Siniestro[]> {
    return this.http
      .get<Siniestro[]>(this.baseURL + 'siniestros')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getSiniestro(id: number): Observable<Siniestro> {
    return this.http.get<Siniestro>(this.baseURL + 'siniestros/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putSiniestro(siniestro: Siniestro): Observable<Siniestro> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Siniestro>(this.baseURL + 'siniestros/' + siniestro.id, siniestro, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  PushSiniestro(siniestro: Siniestro): Observable<Siniestro> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Siniestro>(this.baseURL + 'siniestros/', siniestro, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  DeleteSiniestro(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(this.baseURL + 'siniestros/' + id, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
