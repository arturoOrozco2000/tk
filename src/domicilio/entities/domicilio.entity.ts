import { Prop, Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

@Schema()
export class Domicilio extends Document {
  @Prop({index: true, required: true})
  idUsuario: string;

  @Prop({index: true, required: true})
  colonia: string;

  @Prop({index: true, required: true})
  calle: string;

  @Prop({index: true, required: true})
  noExterior: string;

  @Prop({index: true})
  noInterior?: string;

  @Prop({index: true, required: true})
  pais: string;

  @Prop({index: true, required: true})
  ciudad: string;

  @Prop({index: true, required: true})
  cp: number;

  @Prop({index: true, required: true})
  celular: string;
}

export const DomicilioSchema = SchemaFactory.createForClass(Domicilio);
