import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model, isValidObjectId } from 'mongoose';
import { GeneralService } from '../general/general.service';
import { SearchUsuario } from './dto/search-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const Content = await this.usuarioModel.create(createUsuarioDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchUsuario: SearchUsuario) {
    try {
      const {
        nombre = '',
        apellidoP = '',
        apellidoM = '',
      } = searchUsuario;

      const Content = await this.usuarioModel.find(
        { $and: 
          [
            { nombre: {$regex: `${nombre}`, $options: 'i'}},
            { apellidoP: {$regex: `${apellidoP}`, $options: 'i'}},
            { apellidoM: {$regex: `${apellidoM}`, $options: 'i'}},
          ]
        }
      )

      if(Content.length <= 0)
      throw new BadRequestException("Informacion no encontrada")
      
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findOne(term: string) {
    try {
      let usuario: Usuario;

      if (!usuario && isValidObjectId(term))
      usuario = await this.usuarioModel.findById(term);

      if (!usuario)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return usuario;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async update(term: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(term);

    await usuario.updateOne( updateUsuarioDto );
    return { ...usuario.toJSON, ...updateUsuarioDto }
  }

  async remove(id: string) {
    const { deletedCount } = await this.usuarioModel.deleteOne({ _id: id });
    if( deletedCount === 0 )
      throw new BadRequestException(`Usuario con id: "${ id }" no encontrado`)
    return;
  }
}
