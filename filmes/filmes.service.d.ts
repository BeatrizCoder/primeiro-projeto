import { CreateFilmeDto } from './dto/create-filme.dto';
export declare type Filme = {
    nome: string;
    imagem?: string;
};
export declare class FilmesService {
    getAll(): Filme[];
    createFilme(filme: CreateFilmeDto): number;
}
