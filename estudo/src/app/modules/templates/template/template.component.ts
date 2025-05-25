import {Component, signal, WritableSignal} from '@angular/core'

@Component(
    {
        selector:'app-template',
        styleUrl:'template.component.scss',
        templateUrl:'template.component.html'
    }
    
)
export class TemplateComponent {

    isFormValid:WritableSignal<boolean> = signal<boolean>(true)
    isFormValid2 = true
    link = 'http://www.facebook.com'
}
