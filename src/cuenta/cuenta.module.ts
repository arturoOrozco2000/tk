import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cuenta, CuentaSchema } from './entities/cuenta.entity';
import { GeneralModule } from 'src/general/general.module';

@Module({
  controllers: [CuentaController],
  providers: [CuentaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Cuenta.name,
        schema: CuentaSchema,
      },
    ]),
    GeneralModule
  ]
})
export class CuentaModule {}
