import { Module } from '@nestjs/common';
import { SaldoService } from './saldo.service';
import { SaldoController } from './saldo.controller';
import { GeneralModule } from 'src/general/general.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Saldo, SaldoSchema } from './entities/saldo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SaldoController],
  providers: [SaldoService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Saldo.name,
        schema: SaldoSchema,
      },
    ]),
    GeneralModule,
  ]
})
export class SaldoModule {}
