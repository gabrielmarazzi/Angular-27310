export class Clases {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public fechaHora: Date
    ) { }


}


export interface Clases {
    id: number;
    nombre: string;
    descripcion: string;
    fechaHora: Date;
}