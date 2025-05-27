import { Component, inject} from '@angular/core';
import { HeroService } from '../service/inject.service';


@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.css']
})
export class InjectComponent {

    heroService: HeroService = inject(HeroService);
    ngOnInit(): void {

        this.heroService.getHeroes();

        console.log('InjectComponent ngOnInit');
        
    }

}     