import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES:Routes = [
{path:'', component:LoginComponent},
{path:'cadastrousuario', component:RegisterUserComponent},
{path:'cadastrotarefa', component:RegisterTaskComponent}
]
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)