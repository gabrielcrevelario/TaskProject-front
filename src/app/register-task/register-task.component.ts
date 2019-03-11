import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.scss']
})
export class RegisterTaskComponent implements OnInit {
titulo:string;
respModal:boolean = false
tarefas=[];
tarefa:Tarefa;
closeModal:boolean = false;
IsCompleted:boolean;
constructor(private tarefaService:TarefaService, private modalService: BsModalService) { }
loginIsTrue:boolean = false;
modalRef: BsModalRef;
ngOnInit() {
  this.tarefaService.getAll().subscribe((data:any[]) => this.tarefas = data)
  this.tarefaService.cancel.subscribe(
    respModal => this.closeModal = respModal
  )
  }
  saveTask() {
    debugger
    let tf = new Tarefa()
    tf.titulo = this.titulo;
    tf.usuarioId = 1;
    tf.completo = true;
    this.tarefaService.create(tf).subscribe()
    this.tarefas.push(tf);
}
  remove() {
  this.tarefaService.delete(this.tarefa.id)
}
getData= (response)=> {
  if(response != null)
    this.tarefas = response
}
  update(tarefa:Tarefa) {
    debugger
    this.tarefa = tarefa;
  this.respModal = true
this.tarefaService.loadModal(this.tarefa);
}
}
