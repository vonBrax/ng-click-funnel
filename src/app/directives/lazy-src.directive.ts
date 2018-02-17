import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LazyViewport, LazyTarget } from '../models/lazy-viewport';

@Directive({
    selector: '[lazySrc]',
    inputs: [
        'src: lazySrc',
        'visibleClass: lazySrcVisible'
    ],
    providers: []
})

export class LazySrcDirective implements OnInit, OnDestroy, LazyTarget {

    public element: Element;
    public src: string;
    public visibleClass: string;

    private lazyViewPort: LazyViewport;
    private renderer: Renderer2;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer2,
        lazyViewPort: LazyViewport) {
            this.element = elementRef.nativeElement;
            this.lazyViewPort = lazyViewPort;
            this.renderer = renderer;
            this.src = '';
            this.visibleClass = '';
    }

    ngOnInit() {
        this.lazyViewPort.addTarget(this);
    }

    ngOnDestroy() {
        if (this.lazyViewPort) {
            this.lazyViewPort.removeTarget(this);
        }
    }

    // This gets called by the LazyViewport service when the element associated
    // with this directive has its visibility changed
    public updateVisibility(isVisible: boolean, ratio: number): void {
        if (!isVisible) {
            return;
        }
        // Now that the element is visible, load the underlying SRC value. And, since we
        // no longer need to worry about loading, we can detach from the LazyViewPort
        this.lazyViewPort.removeTarget(this);
        this.lazyViewPort = null;
        this.renderer.setProperty(this.element, 'src', this.src);

        // If an active class has been provided, add it to the element
        if (this.visibleClass) {
            this.renderer.addClass(this.element, this.visibleClass);
        }
    }
}
