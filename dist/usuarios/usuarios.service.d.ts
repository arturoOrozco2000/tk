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
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';
import { GeneralService } from '../general/general.service';
import { SearchUsuario } from './dto/search-usuario.dto';
export declare class UsuariosService {
    private readonly generalService;
    private readonly usuarioModel;
    constructor(generalService: GeneralService, usuarioModel: Model<Usuario>);
    create(createUsuarioDto: CreateUsuarioDto): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchUsuario: SearchUsuario): Promise<(import("mongoose").Document<unknown, {}, Usuario> & Usuario & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Usuario>;
    update(term: string, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        nombre?: string;
        apellidoP?: string;
        apellidoM?: string;
        correo?: string;
        contraseña?: string;
        fechaN?: Date;
        nacionalidad?: string;
        ocupacion?: string;
        rol?: string;
        fecha?: Date;
        status?: boolean;
    }>;
    remove(id: string): Promise<void>;
}
