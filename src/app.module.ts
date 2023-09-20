import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { RetirosModule } from './retiros/retiros.module';
import { AportacionModule } from './aportacion/aportacion.module';
import { NivelModule } from './nivel/nivel.module';
import { SaldoModule } from './saldo/saldo.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    UsuariosModule,
    CuentaModule,
    RetirosModule,
    AportacionModule,
    NivelModule,
    SaldoModule,
    DomicilioModule,
  ],
  providers: [],
})
export class AppModule {}
