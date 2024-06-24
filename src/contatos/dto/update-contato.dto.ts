import { PartialType } from '@nestjs/mapped-types';
import { CreateContatoDto } from './create-contato.dto';
import { Contato } from '../entities/contato.entity';

export class UpdateContatoDto {

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
