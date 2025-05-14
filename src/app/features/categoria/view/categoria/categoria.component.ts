import { Component, inject } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { AsyncPipe } from '@angular/common';
import { CategoriaListComponent } from '../categoria-list/categoria-list.component';

const PIPES = [
    AsyncPipe
]
const COMPONENTS = [
    CategoriaListComponent
]
@Component({
    'selector': 'app-categoria',
    templateUrl: 'categoria.component.html',
    imports: [...COMPONENTS, ],
})

export class CategoriaComponent {

    private readonly categoriaService = inject(CategoriaService);

    // categorias$ = this.categoriaService.getCategorias()

}