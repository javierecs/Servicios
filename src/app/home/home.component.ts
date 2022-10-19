import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>(); 

  constructor(private userService: UsuarioService, private articleService: ArticulosService, private ruta: Router) { }

  ngOnInit(): void {
    let articulos = this.articulos
    let usuario = this.userService.usuario
    articulos.push({
      titulo: 'Como andamos',
      descripcion: 'Cosas de situaciones actuales',
      fecha: new Date(),
      autor: usuario
    })
    articulos.push({
      titulo: 'Como estuvimos',
      descripcion: 'Cosas de situaciones pasadas',
      fecha: new Date(),
      autor: usuario
    })
    articulos.push({
      titulo: 'Como andaremos',
      descripcion: 'Cosas de situaciones futuras',
      fecha: new Date(),
      autor: usuario
    })
  }

  irADetalle(articulo: Articulo){
    this.articleService.articulo = articulo;
    this.ruta.navigateByUrl('/articulo-detalle');
  }

}
