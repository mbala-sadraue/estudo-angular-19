import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {


  private activatedRoute = inject(ActivatedRoute)

  constructor() {
    // console.log(this.activatedRoute.component);
    // console.log(this.activatedRoute.routeConfig?.title);
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log('Query Params:', params);
    });
    this.activatedRoute.params.subscribe(params => {
      console.log('Route Params:', params)
    })
    console.log('Snapshot', this.activatedRoute.snapshot.queryParamMap);
  }

  omInit() {

    console.log('FirstComponent initialized');

  }
}
