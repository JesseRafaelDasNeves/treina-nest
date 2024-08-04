import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';
import { ReadContatoDto } from './dto/read-contato.dto';
import { AtividadesService } from 'src/atividades/atividades.service';

@Injectable()
export class ContatosService {

    nextId: number = 1;
    contatos: Contato[] = [];

    create(createContatoDto: CreateContatoDto) : ReadContatoDto {
        let contato: Contato = CreateContatoDto.toContato(createContatoDto);
        contato.id = this.nextId;
        this.nextId++;
        this.contatos.push(contato);
        return Contato.toReadDTO(contato);
    }

    findAll(): ReadContatoDto[] {
        return this.contatos;
    }

    findOne(id: number): ReadContatoDto {
        let contato: Contato = this.contatos.find(cont => cont.id == id);
        return Contato.toReadDTO(contato);
    }

    update(id: number, updateContatoDto: UpdateContatoDto) : ReadContatoDto {
        let contato: Contato = this.contatos.find(cont => cont.id == id);
        contato.name = updateContatoDto.name;
        contato.email = updateContatoDto.email;
        contato.cep = updateContatoDto.cep;
        return Contato.toReadDTO(contato);
    }

    remove(id: number)  {
        this.contatos.splice(this.contatos.findIndex(cont => cont.id == id), 1);
        return {};
    }
}
