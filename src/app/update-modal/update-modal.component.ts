import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {
tarefa:Tarefa;
@Input() showModal:boolean;
modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private tarefaService:TarefaService) { }

  ngOnInit() {
    debugger
    this.tarefaService.findTarefa.subscribe(
      tarefa => {
        console.log(tarefa)
        this.tarefa = tarefa}
    )
  }
  hide() {
    this.tarefaService.cancelModal(false);

  }
  onSubmit() {
    this.tarefaService.create(this.tarefa);
    this.tarefaService.cancelModal(false);
    }
}