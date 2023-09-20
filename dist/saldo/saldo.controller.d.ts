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
import { SaldoService } from './saldo.service';
import { CreateSaldoDto } from './dto/create-saldo.dto';
import { UpdateSaldoDto } from './dto/update-saldo.dto';
import { SearchSaldo } from './dto/search-saldo.dto';
export declare class SaldoController {
    private readonly saldoService;
    constructor(saldoService: SaldoService);
    create(createSaldoDto: CreateSaldoDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/saldo.entity").Saldo> & import("./entities/saldo.entity").Saldo & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchSaldo: SearchSaldo): Promise<(import("mongoose").Document<unknown, {}, import("./entities/saldo.entity").Saldo> & import("./entities/saldo.entity").Saldo & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/saldo.entity").Saldo>;
    update(id: string, updateSaldoDto: UpdateSaldoDto): string;
    remove(id: string): string;
}
