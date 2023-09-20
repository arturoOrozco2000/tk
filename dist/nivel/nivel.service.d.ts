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
import { CreateNivelDto } from './dto/create-nivel.dto';
import { UpdateNivelDto } from './dto/update-nivel.dto';
import { GeneralService } from '../general/general.service';
import { Nivel } from './entities/nivel.entity';
import { Model } from 'mongoose';
import { SearchNivel } from './dto/search-nivel.dto';
export declare class NivelService {
    private readonly generalService;
    private readonly nivelModel;
    constructor(generalService: GeneralService, nivelModel: Model<Nivel>);
    create(createNivelDto: CreateNivelDto): Promise<import("mongoose").Document<unknown, {}, Nivel> & Nivel & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchNivel: SearchNivel): Promise<(import("mongoose").Document<unknown, {}, Nivel> & Nivel & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Nivel>;
    update(id: number, updateNivelDto: UpdateNivelDto): string;
    remove(id: number): string;
}
