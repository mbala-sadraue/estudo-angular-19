import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
// import { Observable, take, tap } from "rxjs";
import { Categoria } from "../model/categoria";
import { environment } from "../../../environment/environment";
import { toSignal } from "@angular/core/rxjs-interop";
@Injectable({
    providedIn: 'root'
})

export class CategoriaService {
    private readonly apiUrl = environment.apiUrl + 'categories';
    // constructor(private http: HttpClient) { }

    private readonly httpClient = inject(HttpClient);

 private readonly categorias$ = this.httpClient.get<Categoria[]>(this.apiUrl);
    

 public categorias = toSignal(this.categorias$, { initialValue: [] as Categoria[] });
    // public categorias = signal<Categoria[]>([]);

    // getCategorias(): Observable<Categoria[]> {
    //     return this.httlClient.get<Categoria[]>(this.apiUrl).pipe
    //         (
    //             tap((categorias) => {
    //                 this.categorias.set(categorias);
    //                 console.log("categorias"+categorias);
    //             })

    //         );
    // }
}