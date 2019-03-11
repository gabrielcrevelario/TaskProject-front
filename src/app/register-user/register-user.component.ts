import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
usuario:Usuario = new Usuario();
modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private usuarioService:UsuarioService) { }

  ngOnInit() {
  }
  hide() {
    this.modalService.hide(0)
  }
  onSubmit(usuario:Usuario) {
    this.usuario = usuario;
    debugger
    this.usuarioService.create(this.usuario).subscribe();
    this.modalService.hide(0)
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
}
