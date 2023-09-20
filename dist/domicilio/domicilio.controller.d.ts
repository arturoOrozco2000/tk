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
import { DomicilioService } from './domicilio.service';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { UpdateDomicilioDto } from './dto/update-domicilio.dto';
import { SearchDomicilio } from './dto/search-domicilio.dto';
export declare class DomicilioController {
    private readonly domicilioService;
    constructor(domicilioService: DomicilioService);
    create(createDomicilioDto: CreateDomicilioDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/domicilio.entity").Domicilio> & import("./entities/domicilio.entity").Domicilio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchDomicilio: SearchDomicilio): Promise<(import("mongoose").Document<unknown, {}, import("./entities/domicilio.entity").Domicilio> & import("./entities/domicilio.entity").Domicilio & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/domicilio.entity").Domicilio>;
    update(id: string, updateDomicilioDto: UpdateDomicilioDto): string;
    remove(id: string): string;
}
