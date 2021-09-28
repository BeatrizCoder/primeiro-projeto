import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import{ParticipantesController} from './participantes.controller';
import{ParticipantesService} from './participantes.service';

@Module({
    imports:[PrismaModule],
    controllers:[ParticipantesController],
    providers:[ParticipantesService],
})
export class ParticipantesModule {}
