import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AportacionService } from './aportacion.service';
import { CreateAportacionDto } from './dto/create-aportacion.dto';
import { UpdateAportacionDto } from './dto/update-aportacion.dto';
import { SearchAportacion } from './dto/search-aportacion.dto';

@Controller('aportacion')
export class AportacionController {
  constructor(private readonly aportacionService: AportacionService) {}

  @Post()
  create(@Body() createAportacionDto: CreateAportacionDto) {
    return this.aportacionService.create(createAportacionDto);
  }

  @Get()
  findAll(@Query() searchAportacion: SearchAportacion) {
    return this.aportacionService.findAll(searchAportacion);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.aportacionService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAportacionDto: UpdateAportacionDto) {
    return this.aportacionService.update(+id, updateAportacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aportacionService.remove(+id);
  }
}
