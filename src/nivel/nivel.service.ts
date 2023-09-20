import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { GeneralService } from '../general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { Nivel } from './entities/nivel.entity';
import { Model, isValidObjectId } from 'mongoose';
import { SearchNivel } from './dto/search-nivel.dto';

@Injectable()
export class NivelService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Nivel.name)
    private readonly nivelModel: Model<Nivel>,
  ) {}

  async create(createNivelDto: CreateNivelDto) {
    try {
      const Content = await this.nivelModel.create(createNivelDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchNivel: SearchNivel) {
    try {
      const {
        idUsuario = '',
        nombreN = '',
        interesM = '',
        interesA = '',
        montoF = ''
      } = searchNivel;
      const Content = await this.nivelModel.find(
        { $and: 
          [
            { idUsuario: {$regex: `${idUsuario}`, $options: 'i'}},
            { nombreN: {$regex: `${nombreN}`, $options: 'i'}},
            // { interesM: {$regex: `${interesM}`, $options: 'i'}},
            // { interesA: {$regex: `${interesA}`, $options: 'i'}},
            // { montoF: {$regex: `${montoF}`, $options: 'i'}},
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
      let nivel: Nivel;

      if (!nivel && isValidObjectId(term))
      nivel = await this.nivelModel.findById(term);

      if (!nivel)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return nivel;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  update(id: number, updateNivelDto: UpdateNivelDto) {
    return `This action updates a #${id} nivel`;
  }

  remove(id: number) {
    return `This action removes a #${id} nivel`;
  }
}
