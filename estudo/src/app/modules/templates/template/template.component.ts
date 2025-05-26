import { CurrencyPipe, DatePipe, JsonPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common'
import { Component, signal, WritableSignal } from '@angular/core'
import { MyCustomTransformationPipe } from '../components/MyCustomTraformationPipe'

const PIPES =[
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    PercentPipe,
    MyCustomTransformationPipe
]
@Component(
    {
        selector: 'app-template',
        styleUrl: 'template.component.scss',
        templateUrl: 'template.component.html',
        imports: [
            ...PIPES
        ]
    }

)
export class TemplateComponent {

    isFormValid: WritableSignal<boolean> = signal<boolean>(true)
    isFormValid2 = true
    link = 'http://www.facebook.com'
    classBtn = 'btn'

    btnHover = ['btn', 'btn_primary']
    btnPrimary = {
        btn_primary: true,
        btn: true
    }

    items = [
        {
        id: 1,
        name: 'Item 1',
        amount: 120.50,
        date:'2025-05-26',
    },
    {
        id: 2,
        name: 'Item 2',
        amount: 80.00,
        date:'2025-05-27',
    },
    {
        id: 3,
        name: 'Item 3', 
        amount: 45.75,
        date:'2025-05-28',
    },
    {
        id: 4,
        name: 'Item 4',
        amount: 200.00,
        date:'2025-05-29',
    },
];

    onKeyup(event: KeyboardEvent) {
        // console.log("keyup => "+event.key);
        console.log("keyup => " + event.key);

    }
    onKeyupEnter(event: any) {
        console.log("keyup enter => " + event.key);
    }
    showOverlay(event: MouseEvent) {
        event.preventDefault
        console.log("show overlay");
    }
}
