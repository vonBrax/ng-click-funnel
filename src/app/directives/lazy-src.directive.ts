import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

// import { LazyViewPort, LazyTarget } from './lazy-viewport.ts';

@Directive({
    selector: '[lazySrc]',
    inputs: [
        'src: lazySrc',
        'visibleClass: lazySrcVisible'
    ]
})

export class LazySrcDirective implements OnInit, OnDestroy /*, LazyTarget */ {

    public element: Element;
    public src: string;
    public visibleClass: string;

    // private lazyViewPort: LazyViewPort;
    private renderer: Renderer2;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer2) {
            this.element = elementRef.nativeElement;
            this.renderer = renderer;
            this.src = '';
            this.visibleClass = '';
    }

    public ngOnDestroy(): void {
        // (this.lazyViewPort) && this.lazyViewPort.removeTarget(this);
    }
}
