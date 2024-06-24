import { Transform } from "stream";
import { CreateContatoDto } from "../dto/create-contato.dto";
import { ReadContatoDto } from "../dto/read-contato.dto";

export class Contato {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public cep: string
    ) {

    }

    static toReadDTO(contato: Contato): ReadContatoDto {
        return new ReadContatoDto(
            contato.id,
            contato.name,
            contato.email,
            contato.cep
        );
    }
}
