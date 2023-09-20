import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { GeneralService } from 'src/general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Cuenta } from './entities/cuenta.entity';
import { SearchCuenta } from './dto/search-cuenta.dto';

@Injectable()
export class CuentaService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Cuenta.name)
    private readonly cuentaModel: Model<Cuenta>,
  ) {}
  
  async create(createCuentaDto: CreateCuentaDto) {
    try {
      const Content = await this.cuentaModel.create(createCuentaDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchCuenta: SearchCuenta) {
    try {
      const {
        nombre = '',
        apellidoP = '',
        apellidoM = '',
      } = searchCuenta;

      const Content = await this.cuentaModel.find(
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
      let cuenta: Cuenta;

      if (!cuenta && isValidObjectId(term))
      cuenta = await this.cuentaModel.findById(term);

      if (!cuenta)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return cuenta;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  update(id: number, updateCuentaDto: UpdateCuentaDto) {
    return `This action updates a #${id} cuenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} cuenta`;
  }
}
