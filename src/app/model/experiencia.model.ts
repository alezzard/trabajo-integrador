export class experiencia{
    id?: number;
    titulo: String;
    periodo: String;
    imgLogo: String;
    descripcion: String;

    constructor(titulo: String, periodo: String, imgLogo: String, descripcion: String){
        this.titulo = titulo;
        this.periodo = periodo;
        this.imgLogo = imgLogo;
        this.descripcion = descripcion;
    }

}