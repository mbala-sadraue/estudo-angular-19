import { Component, signal, WritableSignal } from '@angular/core'

@Component(
    {
        selector: 'app-template',
        styleUrl: 'template.component.scss',
        templateUrl: 'template.component.html'
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
    },
    {
        id: 2,
        name: 'Item 2',
    },
    {
        id: 3,
        name: 'Item 3', 
    },
    {
        id: 4,
        name: 'Item 4',
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
