import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 usuario:Usuario = new Usuario();
 loginAutenticado:boolean = false;
  constructor(private auth:AuthService, private router:Router, private forms:FormsModule) { }

  ngOnInit() {
  }
  login() {
    debugger
    console.log(this.usuario);
    this.auth.fazerLogin(this.usuario) 
  }
}
