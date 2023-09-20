import { Prop, Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

@Schema()

export class Usuario extends Document {
@Prop({index: true, required: true})
nombre: string;

@Prop({index: true, required: true})
apellidoP: string;

@Prop({index: true, required: true})
apellidoM: string;

@Prop({index: true, required: true, unique: true})
correo: string;

@Prop({index: true, required: true})
contraseña: string;

@Prop({index: true, required: true})
fechaN: Date;

@Prop({index: true, required: true})
nacionalidad: string;

@Prop({index: true, required: true})
ocupacion: string;

@Prop({index: true, required: true})
rol: string;

@Prop({index: true, required: true})
fecha: Date;

@Prop({index: true, required: true})
status: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);