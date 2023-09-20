import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';

@Schema()
export class Retiro extends Document{
  @Prop({index: true, required: true})
  idUsuario: string;
  
  @Prop({index: true, required: true})
  moneda: string;

  @Prop({index: true, required: true})
  monto: number;

  @Prop({index: true, required: true})
  fechaRetiro: Date;

  @Prop({index: true, required: true})
  cuenta: string;

  @Prop({index: true, required: true})
  concepto: string;

  @Prop({index: true, required: true})
  status: boolean;
}

export const RetiroSchema = SchemaFactory.createForClass(Retiro);