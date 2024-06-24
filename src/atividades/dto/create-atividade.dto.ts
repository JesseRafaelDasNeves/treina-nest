import { Atividade } from "../entities/atividade.entity";

export class CreateAtividadeDto {
    constructor(
        public titulo: string,
        public descricao: string,
        public idContato: number
    ) {

    }

    static toAtividade(createAtividadeDto: CreateAtividadeDto): Atividade {
        return new Atividade(
            null,
            createAtividadeDto.titulo,
            createAtividadeDto.descricao,
            createAtividadeDto.idContato
        );
    }
}
