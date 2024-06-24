import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { ReadAtividadeDto } from './dto/read-atividade.dto';
import { Atividade } from './entities/atividade.entity';

@Injectable()
export class AtividadesService {

  nextId: number = 1;
  atividades: Atividade[] = [];

  create(createAtividadeDto: CreateAtividadeDto): ReadAtividadeDto {
    let atividade: Atividade = CreateAtividadeDto.toAtividade(createAtividadeDto);
    atividade.id = this.nextId;
    this.nextId++;
    this.atividades.push(atividade);
    return Atividade.toReadDTO(atividade);
  }

  findAll() : ReadAtividadeDto[] {
    return this.atividades;
  }

  findOne(id: number): ReadAtividadeDto {
    let atividade: Atividade = this.atividades.find(cont => cont.id == id);
    return Atividade.toReadDTO(atividade);
  }

  update(id: number, updateAtividadeDto: UpdateAtividadeDto): ReadAtividadeDto {
    let contato: Atividade = this.atividades.find(cont => cont.id == id);
    contato.titulo = updateAtividadeDto.titulo;
    contato.descricao = updateAtividadeDto.descricao;
    contato.idContato = updateAtividadeDto.idContato;
    return Atividade.toReadDTO(contato);
  }

  remove(id: number) {
    this.atividades.splice(this.atividades.findIndex(cont => cont.id == id), 1);
    return {};
  }
}
