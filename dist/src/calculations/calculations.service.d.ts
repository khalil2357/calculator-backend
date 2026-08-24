import { PrismaService } from '../prisma/prisma.service';
export declare class CalculationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(expression: string, result: string): Promise<$Result.GetResult<import("@prisma/client").Prisma.$CalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>>;
    findAll(): Promise<$Public.PrismaPromise<T>>;
}
