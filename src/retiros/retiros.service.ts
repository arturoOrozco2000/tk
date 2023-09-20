import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { UpdateRetiroDto } from './dto/update-retiro.dto';
import { GeneralService } from '../general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { Retiro } from './entities/retiro.entity';
import { SearchRetiro } from './dto/search-retiro.dto';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class RetirosService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Retiro.name)
    private readonly retiroModel: Model<Retiro>,
  ) {}

  async create(createRetiroDto: CreateRetiroDto) {
    try {
      const Content = await this.retiroModel.create(createRetiroDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchRetiro: SearchRetiro) {
    const {
      moneda = '',
      monto = '',
      cuenta = '',
    } = searchRetiro;

    try {
      const Content = await this.retiroModel.find(
        { $and: 
          [
            { moneda: {$regex: `${moneda}`, $options: 'i'}},
            // { monto: {$regex: `${monto}`, $options: 'i'}},
            { cuenta: {$regex: `${cuenta}`, $options: 'i'}},
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
      let retiro: Retiro;

      if (!retiro && isValidObjectId(term))
      retiro = await this.retiroModel.findById(term);

      if (!retiro)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return retiro;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  update(id: number, updateRetiroDto: UpdateRetiroDto) {
    return `This action updates a #${id} retiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} retiro`;
  }
}
