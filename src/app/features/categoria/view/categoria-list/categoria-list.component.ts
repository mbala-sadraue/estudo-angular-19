import { Component, inject } from "@angular/core";
import { CategoriaService } from "../../service/categoria.service";



@Component({
    selector: 'categoria-list',
    templateUrl: './categoria-list.component.html',
    // styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent {

    private readonly categoriaService = inject(CategoriaService);

    public categorias = this.categoriaService.categorias;
}