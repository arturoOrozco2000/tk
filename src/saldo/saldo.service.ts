import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSaldoDto } from './dto/create-saldo.dto';
import { UpdateSaldoDto } from './dto/update-saldo.dto';
import { GeneralService } from '../general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { Saldo } from './entities/saldo.entity';
import { Model, isValidObjectId } from 'mongoose';
import { SearchSaldo } from './dto/search-saldo.dto';

@Injectable()
export class SaldoService {
  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Saldo.name)
    private readonly saldoModel: Model<Saldo>,
  ) {}

  async create(createSaldoDto: CreateSaldoDto) {
    try {
      const Content = await this.saldoModel.create(createSaldoDto);
      return Content;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async findAll(searchSaldo: SearchSaldo) {
    const {
      idUsuario = '',
      monto = ''
    } = searchSaldo;
    
    try {
      const Content = await this.saldoModel.find(
        { $and: 
          [
            { idUsuario: {$regex: `${idUsuario}`, $options: 'i'}},
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
      let saldo: Saldo;

      if (!saldo && isValidObjectId(term))
      saldo = await this.saldoModel.findById(term);

      if (!saldo)
      throw new BadRequestException("No se encontro ninguna subscripcion con los parametros");
    
      return saldo;
    } catch (error) {
      this.generalService.errorHandler(error);
    }
  }

  async update(term: string, updateSaldoDto: UpdateSaldoDto) {
    const saldo = await this.findOne(term);
    await saldo.updateOne( updateSaldoDto );
    return { ...saldo.toJSON, ...updateSaldoDto }
  }

  remove(id: number) {
    return `This action removes a #${id} saldo`;
  }
}
