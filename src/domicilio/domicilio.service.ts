import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { UpdateDomicilioDto } from './dto/update-domicilio.dto';
import { GeneralService } from '../general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { Domicilio } from './entities/domicilio.entity';
import { Model, isValidObjectId } from 'mongoose';
import { SearchDomicilio } from './dto/search-domicilio.dto';

@Injectable()
export class DomicilioService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Domicilio.name)
    private readonly domicilioModel: Model<Domicilio>,
  ) {}

  async create(createDomicilioDto: CreateDomicilioDto) {
    try {
      const Content = await this.domicilioModel.create(createDomicilioDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchDomicilio: SearchDomicilio) {
    try {
      const {
        colonia = '',
        calle = '',
        pais = '',
        ciudad ='',
        celular = ''
      } = searchDomicilio;

      const Content = await this.domicilioModel.find(
        { $and: 
          [
            { colonia: {$regex: `${colonia}`, $options: 'i'}},
            { calle: {$regex: `${calle}`, $options: 'i'}},
            { pais: {$regex: `${pais}`, $options: 'i'}},
            { ciudad: {$regex: `${ciudad}`, $options: 'i'}},
            { celular: {$regex: `${celular}`, $options: 'i'}},
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
      let domicilio: Domicilio;

      if (!domicilio && isValidObjectId(term))
      domicilio = await this.domicilioModel.findById(term);

      if (!domicilio)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return domicilio;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  update(id: number, updateDomicilioDto: UpdateDomicilioDto) {
    return `This action updates a #${id} domicilio`;
  }

  remove(id: number) {
    return `This action removes a #${id} domicilio`;
  }
}
