import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { SearchCuenta } from './dto/search-cuenta.dto';
import { ValidRoles } from 'src/auth/interfaces';
import { Auth } from 'src/auth/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cuenta')
@Controller('cuenta')
@Auth( ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Post()
  create(@Body() createCuentaDto: CreateCuentaDto) {
    return this.cuentaService.create(createCuentaDto);
  }

  @Get()
  findAll(@Query() searchCuenta: SearchCuenta) {
    return this.cuentaService.findAll(searchCuenta);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.cuentaService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentaDto: UpdateCuentaDto) {
    return this.cuentaService.update(+id, updateCuentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentaService.remove(+id);
  }
}
