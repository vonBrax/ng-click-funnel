import {Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  public isTouchDevice = false;
  @Output()
  public clickOutside = new EventEmitter<Event>();

  constructor(private _elementRef: ElementRef ) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick (event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement || this.isTouchDevice === true) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }

  @HostListener('document:touchstart', ['$event', '$event.target'])
  public onTouchStart(event: any, targetElement: HTMLElement) {
    this.isTouchDevice = true;
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
