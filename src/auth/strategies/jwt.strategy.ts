import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor(
        configService: ConfigService,
        @InjectModel(Usuario.name)
        private readonly usuarioModel: Model<Usuario>,
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }


    async validate( payload: JwtPayload ): Promise<Usuario> {
        
        const { id, correo, nombre, apellidoP } = payload;

        const usuario = await this.usuarioModel.findOne({ correo });

        if ( !usuario ) 
            throw new UnauthorizedException('Token not valid')
            
        if ( !usuario.status ) 
            throw new UnauthorizedException('User is inactive, talk with an admin');
        
        return usuario;
    }

}