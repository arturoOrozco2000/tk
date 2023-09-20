import { Module } from '@nestjs/common';
import { SaldoService } from './saldo.service';
import { SaldoController } from './saldo.controller';
import { GeneralModule } from 'src/general/general.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Saldo, SaldoSchema } from './entities/saldo.entity';

@Module({
  controllers: [SaldoController],
  providers: [SaldoService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Saldo.name,
        schema: SaldoSchema,
      },
    ]),
    GeneralModule
  ]
})
export class SaldoModule {}
