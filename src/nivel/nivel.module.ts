import { Module } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { NivelController } from './nivel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nivel, NivelSchema } from './entities/nivel.entity';
import { GeneralModule } from 'src/general/general.module';

@Module({
  controllers: [NivelController],
  providers: [NivelService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Nivel.name,
        schema: NivelSchema,
      },
    ]),
    GeneralModule
  ]
})
export class NivelModule {}
