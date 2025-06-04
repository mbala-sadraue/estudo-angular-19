import { Component, inject } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient',
  imports: [],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.scss'
})
export class HttpclientComponent {

  httpclienteService = inject(HttpclientService);


  ngOnInit(){
    console.log("Inicial http");
    
    this.httpclienteService.getUsers().subscribe(
      (data)=>{
        console.log("REspostas", data)
      }
    )
  }

}
