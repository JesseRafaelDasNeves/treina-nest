import { Contato } from "../entities/contato.entity";
import { ReadContatoDto } from "./read-contato.dto";

export class CreateContatoDto {

    constructor(
        public name: string,
        public email: string,
        public cep: string
    ) {

    }

    static toContato(createContatoDto: CreateContatoDto): Contato {
        return new Contato(
            null,
            createContatoDto.name,
            createContatoDto.email,
            createContatoDto.cep
        );
    }
}