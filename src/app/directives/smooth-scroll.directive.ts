import { Directive, HostListener, Input, ElementRef, ViewChild } from '@angular/core';

@Directive({
    selector: '[appScrollTo]'
})
export class ScrollToDirective {

    scrollToElement: any;

    currentLocation: number;
    position: number;
    startLocation: number;
    endLocation: number;
    timeLapsed: number;
    percentage: number;
    // duration: number;
    distance: number;
    // easing: string;
    runAnimation: any;

    // @ViewChild(scrollTo ? scrollTo : '', { read: ElementRef }) scrollToRef: ElementRef;
    @Input('scrollTo') scrollTo: string;
    @Input('duration') duration: number;
    @Input('easing') easing: string;
    @Input('alignCenter') alignCenter: boolean;

    constructor() { }

    @HostListener('click', ['$event.target'])
    onMouseClick(target) {

        this.scrollToElement = document.getElementById(this.scrollTo);
        if (!this.scrollToElement) {
            // this.scrollToElement = document.getElementById(this.scrollTo);
            return;
        }
        this.duration = this.duration || 800;
        this.easing = this.easing || 'easeInOutQuart';
        this.currentLocation = null;
        this.timeLapsed = 0;
        this.startLocation = this.getScrollLocation();
        // this.endLocation = this.getEndLocation(this.scrollToRef ? this.scrollToRef : this.scrollToElement);
        this.endLocation = this.getEndLocation(this.scrollToElement);
        this.distance = this.endLocation - this.startLocation;

        // callbackBefore(element)
        this.runAnimation = setInterval( () => this.animateScroll(), 16);
    }

    getEasingPattern(type: string, time: number): number {

        // easeIn: accelerating from zero velocity
        // easeOut: decelerating to zero velocity
        // easeInOut: accelerating until halfway, then deceleration

        switch (type) {
            case 'easeInQuad':    return time * time;
            case 'easeOutQuad':   return time * (2 - time);
            case 'easeInOutQuad': return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

            case 'easeInCubic':    return time * time * time;
            case 'easeOutCubic':   return (--time) * time * time + 1;
            case 'easeInOutCubic': return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;

            case 'easeInQuart':    return time * time * time * time;
            case 'easeOutQuart':   return 1 - (--time) * time * time * time;
            case 'easeInOutQuart': return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;

            case 'easeInQuint':    return time * time * time * time * time;
            case 'easeOutQuint':   return 1 + (--time) * time * time * time * time;
            case 'easeInOutQuint': return time < 0.5 ? 16 * time * time * time * time * time :
                1 + 16 * (--time) * time * time * time * time;

            case 'linear':
            default: return time;
        }
    }

    getEndLocation(el: any, offset?: number): number {
        let location = 0;
        // const elementRect = el.nativeElement.getBoundingClientRect();
        const elementRect = el.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;

        if (this.alignCenter) {
            location = (absoluteElementTop + (el.offsetHeight / 2)) - (window.innerHeight / 2);
        } else {
             location = offset ? absoluteElementTop -  offset : absoluteElementTop;
        }
        return Math.max(location, 0);
    }

    getScrollLocation(): number {
        return window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
    }

    /**
     * Stop the scrolling animation when the anchor is reached (or at the top/bottom of the page)
     */
    stopAnimation(): void {
        this.currentLocation = this.getScrollLocation();
        const scrollHeight = document.body.scrollHeight;
        const internalHeight = window.innerHeight + this.currentLocation;
        if (
            this.position === this.endLocation ||
            this.currentLocation === this.endLocation ||
            internalHeight > scrollHeight
        ) {
            clearInterval(this.runAnimation);
            this.runAnimation = null;
            // callbackAfter(element);
        }
    }

    /**
     * Scroll the page by an increment, and check if it's time to stop
     */
    animateScroll() {
        this.timeLapsed += 16;
        this.percentage = (this.timeLapsed / this.duration);
        this.percentage = (this.percentage > 1) ? 1 : this.percentage;
        this.position = this.startLocation + (this.distance * this.getEasingPattern(this.easing, this.percentage));
        window.scrollTo(0, this.position);
        this.stopAnimation();
    }
}
