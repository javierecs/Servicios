export class Usuario{
    userID: number;
    nombre: string;
    password: string;

    constructor(userID: number, nombre: string, password: string){
        this.userID = userID
        this.nombre = nombre
        this.password = password
    }

}