import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appIsLoading]'
})
export class LoadingDirective {
    @Input('appIsLoading') isLoading: boolean;
    constructor(el: ElementRef) {}
}