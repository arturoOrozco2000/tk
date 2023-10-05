import { Module } from '@nestjs/common';
import { DomicilioService } from './domicilio.service';
import { DomicilioController } from './domicilio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralModule } from 'src/general/general.module';
import { Domicilio, DomicilioSchema } from './entities/domicilio.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DomicilioController],
  providers: [DomicilioService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Domicilio.name,
        schema: DomicilioSchema,
      },
    ]),
    GeneralModule
  ]
})
export class DomicilioModule {}
