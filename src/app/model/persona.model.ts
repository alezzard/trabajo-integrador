export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;
    imgPerfil: String;

    constructor(nombre: String, apellido: String, titulo: String, 
        descripcion: String, imgPerfil: String){
            
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
    }
}