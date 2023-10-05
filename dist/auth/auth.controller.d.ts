/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="node" />
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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { IncomingHttpHeaders } from 'http';
import { AuthService } from './auth.service';
import { LoginUsuarioDto, CreateUsuarioDto } from './dto';
import { Usuario } from './entities/usuario.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUsuario(createUsuarioDto: CreateUsuarioDto): Promise<{
        usuario: import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: string;
    }>;
    loginUsuario(loginUsuarioDto: LoginUsuarioDto): Promise<{
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
    testingPrivateRoute(request: Express.Request, usuario: Usuario, correoUsuario: string, rawHeaders: string[], headers: IncomingHttpHeaders): {
        ok: boolean;
        message: string;
        usuario: Usuario;
        correoUsuario: string;
        rawHeaders: string[];
        headers: IncomingHttpHeaders;
    };
    privateRoute2(usuario: Usuario): {
        ok: boolean;
        usuario: Usuario;
    };
    privateRoute3(usuario: Usuario): {
        ok: boolean;
        usuario: Usuario;
    };
}
