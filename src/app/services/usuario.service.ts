import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = new Usuario();

  constructor() { 
    let usuario = this.usuario
    usuario.userID = 1;
    usuario.nombre = "Pepito"
    usuario.password = "america123"
  }
}
