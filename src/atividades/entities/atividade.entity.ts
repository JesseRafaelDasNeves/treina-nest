import { ReadAtividadeDto } from "../dto/read-atividade.dto";

export class Atividade {
    constructor(
        public id: number,
        public titulo: string,
        public descricao: string,
        public idContato: number
    ) {

    }

    static toReadDTO(atividade: Atividade): ReadAtividadeDto {
        return new ReadAtividadeDto(
            atividade.id,
            atividade.titulo,
            atividade.descricao,
            atividade.idContato
        );
    }
}
