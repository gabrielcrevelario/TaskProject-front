import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login= new EventEmitter<boolean>();
loginAutenticado:boolean=false;
  constructor(private router:Router) { }
  fazerLogin(usuario:Usuario) {
    if(usuario.email ==='admin@gmail.com' && usuario.senha === 'admin' ) {
      this.loginAutenticado = true
     this.router.navigate(['/cadastrotarefa'])
      this.login.emit(true);
    } else {
      this.loginAutenticado = false;
      this.login.next(false);
    }
  }
}
