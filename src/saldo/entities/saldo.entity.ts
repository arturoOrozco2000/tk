import { Prop, Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

@Schema()
export class Saldo extends Document{
  @Prop({index: true, required: true})
  idUsuario: string;

  @Prop({index: true, required: true})
  monto: number;

  @Prop({index: true, required: true})
  status: boolean;
}

export const SaldoSchema = SchemaFactory.createForClass(Saldo);
