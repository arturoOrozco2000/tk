import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { SearchUsuario } from './dto/search-usuario.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll(@Query() searchUsuario: SearchUsuario) {
    return this.usuariosService.findAll(searchUsuario);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.usuariosService.findOne(term);
  }

  @Patch(':term')
  async update(@Param('term') term: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(term, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.usuariosService.remove(id);
  }
}