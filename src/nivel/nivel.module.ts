import { Module } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { NivelController } from './nivel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nivel, NivelSchema } from './entities/nivel.entity';
import { GeneralModule } from 'src/general/general.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [NivelController],
  providers: [NivelService],
  imports: [
    AuthModule,
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
