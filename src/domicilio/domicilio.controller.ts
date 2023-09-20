import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DomicilioService } from './domicilio.service';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { UpdateDomicilioDto } from './dto/update-domicilio.dto';
import { SearchDomicilio } from './dto/search-domicilio.dto';

@Controller('domicilio')
export class DomicilioController {
  constructor(private readonly domicilioService: DomicilioService) {}

  @Post()
  create(@Body() createDomicilioDto: CreateDomicilioDto) {
    return this.domicilioService.create(createDomicilioDto);
  }

  @Get()
  findAll(@Query() searchDomicilio: SearchDomicilio) {
    return this.domicilioService.findAll(searchDomicilio);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.domicilioService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDomicilioDto: UpdateDomicilioDto) {
    return this.domicilioService.update(+id, updateDomicilioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.domicilioService.remove(+id);
  }
}
