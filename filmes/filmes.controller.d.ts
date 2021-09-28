import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService, Filme } from './filmes.service';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    index(): Filme[];
    create(createFilme: CreateFilmeDto): void;
}
