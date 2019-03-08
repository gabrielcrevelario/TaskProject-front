import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { LoginComponent } from './login/login.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { UsuarioService } from './services/usuario.service';
import{ routing} from './task.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TarefaService } from './services/tarefa.service';
import { AuthService } from './login/auth.service';
import {InterceptorModule} from './interceptor.module';
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    RegisterTaskComponent,
    LoginComponent,
    CustomCheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    routing,
    InterceptorModule,
    ModalModule.forRoot()
  ],
  providers: [
    BaseService ,
    AuthService,
    TarefaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
