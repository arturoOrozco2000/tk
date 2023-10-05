import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Usuario } from '../entities/usuario.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Model } from 'mongoose';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usuarioModel;
    constructor(configService: ConfigService, usuarioModel: Model<Usuario>);
    validate(payload: JwtPayload): Promise<Usuario>;
}
export {};
