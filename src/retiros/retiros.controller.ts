import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RetirosService } from './retiros.service';
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { UpdateRetiroDto } from './dto/update-retiro.dto';
import { SearchRetiro } from './dto/search-retiro.dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Retiros')
@Controller('retiros')
@Auth( ValidRoles.admin, ValidRoles.superUser, ValidRoles.user)
export class RetirosController {
  constructor(private readonly retirosService: RetirosService) {}

  @Post()
  create(@Body() createRetiroDto: CreateRetiroDto) {
    return this.retirosService.create(createRetiroDto);
  }

  @Get()
  findAll(@Query() searchRetiro: SearchRetiro) {
    return this.retirosService.findAll(searchRetiro);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.retirosService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetiroDto: UpdateRetiroDto) {
    return this.retirosService.update(+id, updateRetiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retirosService.remove(+id);
  }
}
