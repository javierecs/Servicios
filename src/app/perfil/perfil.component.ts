import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public userService: UsuarioService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    let usuario = this.userService.usuario
    usuario.nombre = 'Manuel Avila'
  }

}
