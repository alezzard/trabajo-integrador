export class proyecto{
    id?:number;
    nombre:string;
    periodo:string;
    descripcion:string;
    imgProyecto:string;
    link:string;

    constructor(nombre:string, periodo:string, descripcion:string, imgProyecto:string, link:string){
        this.nombre = nombre;
        this.periodo = periodo;
        this.descripcion = descripcion;
        this.imgProyecto = imgProyecto;
        this.link = link;
    }
}