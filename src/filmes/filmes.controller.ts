import{
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateFilmeDto } from 'filmes/dto/create-filme.dto';
import { FilmesService } from 'filmes/filmes.service';
import {Filme} from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

@Get('/list')  
@UsePipes(ValidationPipe)
async findMany(): Promise<Filme[]>{
  return this.filmesService.getAll();
}

@Post('/create')
@UsePipes(ValidationPipe)
async create (@Body() createFilme:CreateFilmeDto):Promise<Filme>{
  return this.filmesService.createFilme(createFilme);
}

@Delete('/delete/:id')
@UsePipes(ValidationPipe)
async deleteMany(){
  return this.filmesService.deleteAllFilmes();
}

@Put ('/update/:id')
@UsePipes(ValidationPipe)
async update(
  @Body() updateFilme:CreateFilmeDto,
  @Param ('id', ParseIntPipe) id:number,
):Promise<Filme>{
  return this.filmesService.updateOneFilme(id,updateFilme);
}

@Get('/list/:id')
@UsePipes(ValidationPipe)
async findUnique(@Param('id', ParseIntPipe) id: number){
  return this.filmesService.getOneFilme(id);
}
}