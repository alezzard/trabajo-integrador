export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    descripcion: String;
    imgPerfil: String;
    linkedin?: String;
    instagram?: String;
    github?: String;
    imgBanner: String;
    

    constructor(nombre: String, apellido: String, titulo: String, 
        descripcion: String, imgPerfil: String, linkedin: String, 
        instagram: String, github: String, imgBanner: String){
            
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.github = github;
        this.imgBanner = imgBanner;
    }
}