import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAportacionDto } from './dto/create-aportacion.dto';
import { UpdateAportacionDto } from './dto/update-aportacion.dto';
import { GeneralService } from '../general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { Aportacion } from './entities/aportacion.entity';
import { SearchAportacion } from './dto/search-aportacion.dto';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class AportacionService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Aportacion.name)
    private readonly aportacionModel: Model<Aportacion>,
  ) {}

  async create(createAportacionDto: CreateAportacionDto) {
    try {
      const Content = await this.aportacionModel.create(createAportacionDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchAportacion: SearchAportacion) {
    try {
      const {
        noCuenta ='',
        monto = ''
      } = searchAportacion;

      const Content = await this.aportacionModel.find(
        { $and: 
          [
            { noCuenta: {$regex: `${noCuenta}`, $options: 'i'}},
            // { monto: {$regex: `${monto}`, $options: 'i'}},
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
      let aportacion: Aportacion;

      if (!aportacion && isValidObjectId(term))
      aportacion = await this.aportacionModel.findById(term);

      if (!aportacion)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return aportacion;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  update(id: number, updateAportacionDto: UpdateAportacionDto) {
    return `This action updates a #${id} aportacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} aportacion`;
  }
}
