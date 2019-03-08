import { Component, OnInit, Input  } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';
import { LoginService } from '../services/login.service';
import { ThrowStmt } from '@angular/compiler';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.scss']
})
export class RegisterTaskComponent implements OnInit {
titulo:string;
tarefas=[];
tarefa:Tarefa;
  constructor(private tarefaService:TarefaService, private loginService:LoginService) { }
loginIsTrue:boolean = false;
  ngOnInit() {
    debugger
 
   this.tarefaService.getAll().subscribe((data:any[]) => this.tarefas = data)
  }
saveTask() {
  debugger
  let tf = new Tarefa()
  tf.titulo = this.titulo;
this.tarefaService.create(tf)
}
remove() {
  this.tarefaService.delete(this.tarefa.id)
}
getData= (response)=> {
if(response != null)
this.tarefas = response
}
update() {
  this.titulo = this.tarefa.titulo;
  this.tarefaService.update(this.tarefa, this.tarefa.id)
}
}
