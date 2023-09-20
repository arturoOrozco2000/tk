import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SaldoService } from './saldo.service';
import { CreateSaldoDto } from './dto/create-saldo.dto';
import { UpdateSaldoDto } from './dto/update-saldo.dto';
import { SearchSaldo } from './dto/search-saldo.dto';

@Controller('saldo')
export class SaldoController {
  constructor(private readonly saldoService: SaldoService) {}

  @Post()
  create(@Body() createSaldoDto: CreateSaldoDto) {
    return this.saldoService.create(createSaldoDto);
  }

  @Get()
  findAll(@Query() searchSaldo: SearchSaldo) {
    return this.saldoService.findAll(searchSaldo);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.saldoService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaldoDto: UpdateSaldoDto) {
    return this.saldoService.update(+id, updateSaldoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saldoService.remove(+id);
  }
}
