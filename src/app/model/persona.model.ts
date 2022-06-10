export class persona {
    id: number;
    fullName: String;
    titulo: String;
    descripcion: String;
    imgPerfil: String;
    linkedin?: String;
    instagram?: String;
    github?: String;
    imgBanner: String;
    

    constructor(id:number, fullName: String, titulo: String, 
        descripcion: String, imgPerfil: String, linkedin: String, 
        instagram: String, github: String, imgBanner: String){
        this.id = id;    
        this.fullName = fullName;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
        this.linkedin = linkedin;
        this.instagram = instagram;
        this.github = github;
        this.imgBanner = imgBanner;
    }
}