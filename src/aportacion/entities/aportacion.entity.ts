import { Prop, Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

@Schema()
export class Aportacion extends Document{
  @Prop({index: true, required: true})
  idUsuario: string;

  @Prop({index: true, required: true})
  noCuenta: string;

  @Prop({index: true, required: true})
  monto: number;

  @Prop({index: true, required: true})
  fecha: Date;

  @Prop({index: true, required: true})
  status: boolean;
}

export const AportacionSchema = SchemaFactory.createForClass(Aportacion);
