export class habilidad{
    id?: number;
    imgLogo: string;
    porcentaje:number;

    constructor(imgLogo : string, porcentaje : number){
        this.imgLogo = imgLogo;
        this.porcentaje = porcentaje;
    }
}