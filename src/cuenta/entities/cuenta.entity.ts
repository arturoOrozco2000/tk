import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';

@Schema()
export class Cuenta extends Document{
  @Prop({index: true, required: true})
  idUsuario: string;

  @Prop({index: true, required: true})
  nombre: string;

  @Prop({index: true, required: true})
  apellidoP: string;

  @Prop({index: true, required: true})
  apellidoM: string;

  @Prop({index: true, required: true})
  noCuenta: string;

  @Prop({index: true, required: true})
  Banco: string;

  @Prop({index: true, required: true})
  status: boolean;
}

export const CuentaSchema = SchemaFactory.createForClass(Cuenta);