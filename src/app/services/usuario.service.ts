import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class UsuarioService {
    constructor(private httpClient: HttpClient) { }
    readonly  API_SERVER= 'http://localhost:50001/api/usuario';
    findUsuario = new BehaviorSubject<Usuario>(new Usuario());
    UsuarioWhatch = this.findUsuario.asObservable();
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    create(usuario:Usuario): Observable<Usuario> {
        return this.httpClient.post<Usuario>(this.API_SERVER, usuario, this.httpOptions).pipe(
          tap((usuario: Usuario) => console.log(`added usuario w/ id=${usuario.id}`)),
          catchError(this.handleError<Usuario>('addUsuario'))
        );
      }
       loadModal(usuario:Usuario) {
        this.findUsuario.next(usuario)
      }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
           return of(result as T);
        };
      }
}