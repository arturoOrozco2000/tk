import { Module } from '@nestjs/common';
import { RetirosService } from './retiros.service';
import { RetirosController } from './retiros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralModule } from 'src/general/general.module';
import { Retiro, RetiroSchema } from './entities/retiro.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RetirosController],
  providers: [RetirosService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Retiro.name,
        schema: RetiroSchema,
      },
    ]),
    GeneralModule
  ]
})
export class RetirosModule {}
