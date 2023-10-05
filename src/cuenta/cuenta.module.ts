import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cuenta, CuentaSchema } from './entities/cuenta.entity';
import { GeneralModule } from 'src/general/general.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CuentaController],
  providers: [CuentaService],
  imports: [
    AuthModule,
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
