import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralService } from './general.service';

@Module({
  controllers: [],
  providers: [GeneralService],
  exports: [GeneralService],
  imports: []
})
export class GeneralModule {}
