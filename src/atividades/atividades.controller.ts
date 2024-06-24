import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { ReadAtividadeDto } from './dto/read-atividade.dto';

@Controller('atividades')
export class AtividadesController {
  constructor(private readonly atividadesService: AtividadesService) {}

  @Post()
  create(@Body() createAtividadeDto: CreateAtividadeDto): ReadAtividadeDto {
    return this.atividadesService.create(createAtividadeDto);
  }

  @Get()
  findAll(): ReadAtividadeDto[] {
    return this.atividadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ReadAtividadeDto {
    return this.atividadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtividadeDto: UpdateAtividadeDto) : ReadAtividadeDto {
    return this.atividadesService.update(+id, updateAtividadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atividadesService.remove(+id);
  }
}
