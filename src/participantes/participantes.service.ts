import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';

@Injectable()
export class ParticipantesService{
    constructor(private prisma:PrismaService){}

    async createParticipante(
        data: Prisma.ParticipanteCreateInput,
    ): Promise<Participante>{
        return this.prisma.participante.create({
            data,
        });

    }
 async getAll(): Promise<Participante[]>{
     return this.prisma.participante.findMany();
 }
}