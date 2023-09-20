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
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { UpdateRetiroDto } from './dto/update-retiro.dto';
import { GeneralService } from '../general/general.service';
import { Retiro } from './entities/retiro.entity';
import { SearchRetiro } from './dto/search-retiro.dto';
import { Model } from 'mongoose';
export declare class RetirosService {
    private readonly generalService;
    private readonly retiroModel;
    constructor(generalService: GeneralService, retiroModel: Model<Retiro>);
    create(createRetiroDto: CreateRetiroDto): Promise<import("mongoose").Document<unknown, {}, Retiro> & Retiro & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchRetiro: SearchRetiro): Promise<(import("mongoose").Document<unknown, {}, Retiro> & Retiro & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Retiro>;
    update(id: number, updateRetiroDto: UpdateRetiroDto): string;
    remove(id: number): string;
}
