import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist';

import { CuentaModule } from './cuenta/cuenta.module';
import { RetirosModule } from './retiros/retiros.module';
import { AportacionModule } from './aportacion/aportacion.module';
import { NivelModule } from './nivel/nivel.module';
import { SaldoModule } from './saldo/saldo.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';//import { UsuariosModule } from './auth/;
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    CuentaModule,
    RetirosModule,
    AportacionModule,
    NivelModule,
    SaldoModule,
    DomicilioModule,
    AuthModule
  ],
  providers: [],
})
export class AppModule {}
