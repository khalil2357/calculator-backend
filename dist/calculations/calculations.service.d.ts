import { PrismaService } from '../prisma/prisma.service';
export declare class CalculationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(expression: string, result: string): Promise<{
        id: string;
        expression: string;
        result: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        expression: string;
        result: string;
        createdAt: Date;
    }[]>;
}
