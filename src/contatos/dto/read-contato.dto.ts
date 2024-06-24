export class ReadContatoDto {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public cep: string
    ) {

    }
}