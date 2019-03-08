import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskProject-front';
  logado:boolean = false;
  constructor(private auth:AuthService){}

  ngOnInit() {
    debugger
   this.auth.login.subscribe(
   loginAutenticado =>   this.logado = loginAutenticado
    
   )
  }
}
