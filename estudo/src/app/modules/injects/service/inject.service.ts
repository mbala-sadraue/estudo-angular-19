import { Injectable} from '@angular/core';
@Injectable(
  {
    providedIn:'root'
  }  
)
export class HeroService{


    public getHeroes(): string[]{
        return ['Superman', 'Batman', 'Wonder'];
         
    }
}