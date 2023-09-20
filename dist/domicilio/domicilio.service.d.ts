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
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { UpdateDomicilioDto } from './dto/update-domicilio.dto';
import { GeneralService } from '../general/general.service';
import { Domicilio } from './entities/domicilio.entity';
import { Model } from 'mongoose';
import { SearchDomicilio } from './dto/search-domicilio.dto';
export declare class DomicilioService {
    private readonly generalService;
    private readonly domicilioModel;
    constructor(generalService: GeneralService, domicilioModel: Model<Domicilio>);
    create(createDomicilioDto: CreateDomicilioDto): Promise<import("mongoose").Document<unknown, {}, Domicilio> & Domicilio & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchDomicilio: SearchDomicilio): Promise<(import("mongoose").Document<unknown, {}, Domicilio> & Domicilio & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Domicilio>;
    update(id: number, updateDomicilioDto: UpdateDomicilioDto): string;
    remove(id: number): string;
}
