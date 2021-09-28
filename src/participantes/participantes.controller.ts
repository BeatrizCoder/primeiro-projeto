import{
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValdationPipe,

} from '@nestjs/common';
import { CreateFilmeDto } from 'filmes/dto/create-Participantes.dto';
import{ParticipanteService} from './participantes.service';
import { Participante } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController{
    constructor(private participantesService:ParticipanteService){}

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(
        @Body() createParticipante:CreateFilmeDto,
    ): Promise<Participante>{
        return this.participantesService.createParticipante(createParticipante);
    }
    
    @Get('/listar')
    @UsePipes(ValidationPipe)
    async findMany():Promise<Participante[]>{
        return this.participantesService.getAll();
    }
}