import { CalculationsService } from './calculations.service';
export declare class CalculationsController {
    private readonly calculationsService;
    constructor(calculationsService: CalculationsService);
    create(createCalculationDto: {
        expression: string;
        result: string;
    }): Promise<$Result.GetResult<import("@prisma/client").Prisma.$CalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>>;
    findAll(): Promise<$Public.PrismaPromise<T>>;
}
