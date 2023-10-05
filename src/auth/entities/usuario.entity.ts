import { Prop, Schema , SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import { BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm';


@Schema()
export class Usuario extends Document {
  @Prop({index: true})
  id: string;

  @Prop({index: true, required: true})
  nombre: string;

  @Prop({index: true, required: true})
  apellidoP: string;

  @Prop({index: true, required: true})
  apellidoM: string;

  @Prop({index: true, required: true})
  correo: string;

  @Prop({index: true, required: true})
  contraseña: string;

  @Prop({index: true, required: true, default: ['user']})
  roles: string[];

  @Prop({index: true, required: true, default: true})
  status: boolean;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
      this.correo = this.correo.toLowerCase().trim();
  }    
  
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
      this.checkFieldsBeforeInsert();   
  }
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

