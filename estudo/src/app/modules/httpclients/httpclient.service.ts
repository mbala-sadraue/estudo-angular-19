import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor() { }
private readonly httpClient = inject(HttpClient);

private readonly apiUrl = 'http://localhost:3000/users';


getUsers(){
  return  this.httpClient.get(this.apiUrl).pipe(
    tap(
      (response) =>{

        console.log(response);
        
      }
      
    )
  );
}


}
