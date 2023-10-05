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
import { CreateSaldoDto } from './dto/create-saldo.dto';
import { UpdateSaldoDto } from './dto/update-saldo.dto';
import { GeneralService } from '../general/general.service';
import { Saldo } from './entities/saldo.entity';
import { Model } from 'mongoose';
import { SearchSaldo } from './dto/search-saldo.dto';
export declare class SaldoService {
    private readonly generalService;
    private readonly saldoModel;
    constructor(generalService: GeneralService, saldoModel: Model<Saldo>);
    create(createSaldoDto: CreateSaldoDto): Promise<import("mongoose").Document<unknown, {}, Saldo> & Saldo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchSaldo: SearchSaldo): Promise<(import("mongoose").Document<unknown, {}, Saldo> & Saldo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Saldo>;
    update(term: string, updateSaldoDto: UpdateSaldoDto): Promise<{
        idUsuario?: string;
        monto?: number;
        status?: boolean;
    }>;
    remove(id: number): string;
}
