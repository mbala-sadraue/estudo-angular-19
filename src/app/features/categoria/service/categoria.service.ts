import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Observable, take, tap } from "rxjs";
import { Categoria } from "../model/categoria";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn: 'root'
})

export class CategoriaService {
    private readonly apiUrl = environment.apiUrl + 'categories';
    // constructor(private http: HttpClient) { }

    private readonly httlClient = inject(HttpClient);


    public categorias = signal<Categoria[]>([]);

    getCategorias(): Observable<Categoria[]> {
        return this.httlClient.get<Categoria[]>(this.apiUrl).pipe
            (
                tap((categorias) => {
                    this.categorias.set(categorias);
                    console.log("categorias"+categorias);
                })

            );
    }
}