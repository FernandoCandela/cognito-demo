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
      .pipe(map( (response:any) =>{
        return response.Items.sort(function (a:any, b:any) {
          if (a.id < b.id)
              return -1;
          else if (a.id > b.id)
              return 1;
          else
              return 0;
      });}))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getSiniestro(id: number): Observable<Siniestro> {
    return this.http.get<Siniestro>(this.baseURL + 'siniestros/' + id)
      .pipe(map( (response:any) =>
      response.Item
      ))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putSiniestro(siniestro: Siniestro): Observable<Siniestro> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };
    return this.http.put<Siniestro>(this.baseURL + 'siniestros/' + siniestro.id, siniestro, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  PushSiniestro(siniestro: Siniestro): Observable<Siniestro> {
    return this.http.post<Siniestro>(this.baseURL + 'siniestros/', siniestro)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  DeleteSiniestro(id: number) {
    return this.http.delete(this.baseURL + 'siniestros/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
