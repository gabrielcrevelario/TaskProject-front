import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Tarefa } from '../models/tarefa.model';
import { Observable, throwError } from 'rxjs';
import { BaseService } from './base.service';
import { tap, delay, take,catchError, retry, map } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
    providedIn:'root'
})
export class TarefaService {
    URL_DEFAULT:string = "tarefa";

  error:string;
    public API_SERVER:string= 'http://localhost:44376/api/tarefa';
   
    constructor(private httpBaseService:BaseService, private httpClient:HttpClient) { }

     getAll(){
        return this.httpClient.get<Tarefa[]>(this.API_SERVER);
      }
       private handleError(error: HttpErrorResponse) {
         if (error.error instanceof ErrorEvent) {
           // A client-side or network error occurred. Handle it accordingly.
           console.error('An error occurred:', error.error.message);
         } else {
           // The backend returned an unsuccessful response code.
           // The response body may contain clues as to what went wrong,
           console.error(
             `Backend returned code ${error.status}, ` +
             `body was: ${error.error}`);
         }
         // return an observable with a user-facing error message
         return throwError(
           'Something bad happened; please try again later.');
       };
      getAll2(callback: (response) => void,  httpError?: (error) => void ) {
        debugger
        const innerSubscriber = this.httpBaseService.get(`${this.URL_DEFAULT}` )
        .subscribe(response => {
            callback(response);
            innerSubscriber.unsubscribe();
        }, error => { httpError(error); });
    }
    create(tarefa:Tarefa) {
      this.httpClient.post<Tarefa>(this.API_SERVER, tarefa)  
     }
   update(tarefa:Tarefa, idTarefa:number) {
       this.httpClient.put<Tarefa>(`${this.API_SERVER}${idTarefa}`, tarefa)
     }
       delete(idTarefa:number) {
         this.httpClient.delete<Tarefa>(`${this.API_SERVER}${idTarefa}`)
     }

}