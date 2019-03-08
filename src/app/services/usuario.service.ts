import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UsuarioService {
    constructor(private httpClient: HttpClient) { }
    readonly  API_SERVER= 'http://localhost:44376/api/usuario';
    create(usuario:Usuario){
   this.httpClient.post<Usuario>(this.API_SERVER,stringify( usuario))  
       }
}