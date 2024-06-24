import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { ReadContatoDto } from './dto/read-contato.dto';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Post()
  create(@Body() createContatoDto: CreateContatoDto) : ReadContatoDto {
    return this.contatosService.create(createContatoDto);
  }

  @Get()
  findAll(): ReadContatoDto[] {
    return this.contatosService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): ReadContatoDto {
    return this.contatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto): UpdateContatoDto {
    return this.contatosService.update(+id, updateContatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatosService.remove(+id);
  }
}
