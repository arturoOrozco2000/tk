import { Module } from '@nestjs/common';
import { AportacionService } from './aportacion.service';
import { AportacionController } from './aportacion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Aportacion, AportacionSchema } from './entities/aportacion.entity';
import { GeneralModule } from 'src/general/general.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AportacionController],
  providers: [AportacionService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Aportacion.name,
        schema: AportacionSchema,
      },
    ]),
    GeneralModule
  ]
})
export class AportacionModule {}
