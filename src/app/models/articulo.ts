import { Usuario } from './usuario';
export class Articulo{
    titulo!: string; 
    descripcion!: string;
    fecha!: Date;
    autor!: Usuario;
}