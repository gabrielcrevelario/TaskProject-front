import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Tarefa } from '../models/tarefa.model';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import { tap, delay, take,catchError, retry, map } from 'rxjs/operators';
import { error } from 'util';
import { stringify } from '@angular/core/src/util';

@Injectable({
    providedIn:'root'
})
export class TarefaService {
  URL_DEFAULT:string = "tarefa";
  findTarefa = new BehaviorSubject<Tarefa>(new Tarefa());
  tarefaWhatch = this.findTarefa.asObservable();
    cancel = new  BehaviorSubject<boolean>(true);
    cancelAsObservable = this.cancel.asObservable()
    error:string;
    public API_SERVER:string= 'http://localhost:50001/api/tarefa/';
    
    constructor(private httpBaseService:BaseService, private httpClient:HttpClient) { }
    
     getAll(){
       return this.httpClient.get<Tarefa[]>(this.API_SERVER);
      }
      
      
      httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      loadModal(tarefa:Tarefa) {
        this.findTarefa.next(tarefa)
      }
      cancelModal(closeModal: boolean) {
this.cancel.next(closeModal)
}
    create(tarefa:Tarefa): Observable<Tarefa> {
        return this.httpClient.post<Tarefa>(this.API_SERVER, tarefa, this.httpOptions).pipe(
          tap((tarefa: Tarefa) => console.log(`added product w/ id=${tarefa.id}`)),
          catchError(this.handleError<Tarefa>('addTarefa'))
        );
      }
      
      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
           return of(result as T);
        };
      }

   update(tarefa:Tarefa, idTarefa:number):Observable<Tarefa> {
      return this.httpClient.put<Tarefa>(`${this.API_SERVER}${idTarefa}`, tarefa).pipe(
        tap((tarefa: Tarefa) => console.log(`update tarefa w/ id=${tarefa.id}`)),
        catchError(this.handleError<Tarefa>('putTarefa'))
      );
     }
       delete(idTarefa:number):Observable<Tarefa> {
        return this.httpClient.delete<Tarefa>(`${this.API_SERVER}${idTarefa}`).pipe(
          tap((tarefa: Tarefa) => console.log(`update tarefa w/ id=${tarefa.id}`)),
          catchError(this.handleError<Tarefa>('putTarefa'))
        );
     }

}