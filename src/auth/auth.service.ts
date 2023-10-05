import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { Usuario } from './entities/usuario.entity';
import { LoginUsuarioDto } from './dto';
import { GeneralService } from 'src/general/general.service';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Model } from 'mongoose';
import { JwtPayload } from './interfaces/jwt-payload.interface';


@Injectable()
export class AuthService {

  constructor(
    private readonly generalService: GeneralService,
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
    private readonly jwtService: JwtService,
  ) {}


  async create( createUserDto: CreateUsuarioDto) {
    
    try {

      const { contraseña, ...userData } = createUserDto;
      
      const usuario = await this.usuarioModel.create({
        ...userData,
        contraseña: bcrypt.hashSync( contraseña, 10 )
      });

      delete  (await usuario).contraseña;

      return {
        usuario,
        token: this.getJwtToken({ id: usuario.id, correo: usuario.correo, nombre: usuario.nombre, apellidoP: usuario.apellidoP})
      };

    } catch (error) {
      this.generalService.errorHandler(error);
    }

  }

  async login( loginUsuarioDto: LoginUsuarioDto ) {

    const { contraseña, correo } = loginUsuarioDto;

    const usuario = await this.usuarioModel.findOne({ correo });

    if ( !usuario ) 
      throw new UnauthorizedException('Credentials are not valid (email)');
      
    if ( !bcrypt.compareSync( contraseña, usuario.contraseña ) )
      throw new UnauthorizedException('Credentials are not valid (password)');

    const { nombre, apellidoP, apellidoM, roles, status } = usuario;
    return {
      nombre,
      apellidoP, 
      apellidoM, 
      roles, 
      status,
      token: this.getJwtToken({ id: usuario.id, correo: usuario.correo, nombre: usuario.nombre, apellidoP: usuario.apellidoP})
    };
  }

  async checkAuthStatus( usuario: Usuario ){

    const { nombre, apellidoP, apellidoM, roles, status } = usuario;
    return {
      nombre, 
      apellidoP, 
      apellidoM, 
      roles, 
      status,
      token: this.getJwtToken({ id: usuario.apellidoM , correo: usuario.correo, nombre: usuario.nombre, apellidoP: usuario.apellidoP})
    };

 }


  
  private getJwtToken( payload: JwtPayload ) {

    const token = this.jwtService.sign( payload );
    return token;

  }

  // private handleDBErrors( error: any ): never {


  //   if ( error.code === '23505' ) 
  //     throw new BadRequestException( error.detail );

  //   console.log(error)

  //   throw new InternalServerErrorException('Please check server logs');

  // }


}
