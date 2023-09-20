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
import { AportacionService } from './aportacion.service';
import { CreateAportacionDto } from './dto/create-aportacion.dto';
import { UpdateAportacionDto } from './dto/update-aportacion.dto';
import { SearchAportacion } from './dto/search-aportacion.dto';
export declare class AportacionController {
    private readonly aportacionService;
    constructor(aportacionService: AportacionService);
    create(createAportacionDto: CreateAportacionDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/aportacion.entity").Aportacion> & import("./entities/aportacion.entity").Aportacion & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchAportacion: SearchAportacion): Promise<(import("mongoose").Document<unknown, {}, import("./entities/aportacion.entity").Aportacion> & import("./entities/aportacion.entity").Aportacion & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/aportacion.entity").Aportacion>;
    update(id: string, updateAportacionDto: UpdateAportacionDto): string;
    remove(id: string): string;
}
