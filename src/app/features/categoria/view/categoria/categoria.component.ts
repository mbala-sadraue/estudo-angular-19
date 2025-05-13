import {Component, inject} from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';

@Component({
    'selector':'app-categoria',
    templateUrl:'categoria.component.html',
})  

export class CategoriaComponent{

    private readonly categoriaService = inject(CategoriaService);


    categorias$ = this.categoriaService.getCategorias().subscribe();
    
}