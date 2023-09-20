import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { SearchNivel } from './dto/search-nivel.dto';

@Controller('nivel')
export class NivelController {
  constructor(private readonly nivelService: NivelService) {}

  @Post()
  create(@Body() createNivelDto: CreateNivelDto) {
    return this.nivelService.create(createNivelDto);
  }

  @Get()
  findAll(@Query() searchNivel: SearchNivel) {
    return this.nivelService.findAll(searchNivel);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.nivelService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNivelDto: UpdateNivelDto) {
    return this.nivelService.update(+id, updateNivelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nivelService.remove(+id);
  }
}
