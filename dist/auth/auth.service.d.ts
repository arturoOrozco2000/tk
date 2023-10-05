/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { JwtService } from '@nestjs/jwt';
import { Usuario } from './entities/usuario.entity';
import { LoginUsuarioDto } from './dto';
import { GeneralService } from 'src/general/general.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly generalService;
    private readonly usuarioModel;
    private readonly jwtService;
    constructor(generalService: GeneralService, usuarioModel: Model<Usuario>, jwtService: JwtService);
    create(createUserDto: CreateUsuarioDto): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
    login(loginUsuarioDto: LoginUsuarioDto): Promise<{
        nombre: string;
        apellidoP: string;
        apellidoM: string;
        roles: string[];
        status: boolean;
        token: string;
    }>;
    checkAuthStatus(usuario: Usuario): Promise<{
        nombre: string;
        apellidoP: string;
        apellidoM: string;
        roles: string[];
        status: boolean;
        token: string;
    }>;
    private getJwtToken;
}
