import { Prop, Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

@Schema()
export class Nivel extends Document {
  @Prop({index: true, required: true})
  idUsuario: string;

  @Prop({index: true, required: true})
  nombreN: string;

  @Prop({index: true, required: true})
  interesM: number;

  @Prop({index: true, required: true})
  interesA: number;

  @Prop({index: true, required: true})
  montoF: number;

  @Prop({index: true, required: true})
  status: boolean;
}

export const NivelSchema = SchemaFactory.createForClass(Nivel);
