import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface LazyTarget {
  element: Element;
  updateVisibility: (isVisible: boolean, ration: number) => void;
}

export class LazyViewport {
  private observer: IntersectionObserver;
  private targets: Map<Element, LazyTarget>;
  @Inject(PLATFORM_ID) private platformId: Object;

  constructor() {
    this.observer = null;

    // The IntersectionObserver watches Elements. However, when an element visibility
    // changes, we have to alert an Angular Directive instance. As such, we're going
    // to keep a map of Elements-to-Directives. This way, when our observer callback
    // is invoked, we'll be able to extract the appropriate Directive from the
    // Element-based observer entries collection.
    this.targets = new Map();
  }

  public addTarget(target: LazyTarget): void {
    if (this.observer) {
      this.targets.set(target.element, target);
      this.observer.observe(target.element);
    } else {
      // If we don't actually have an observer (lacking browser support), then we're
      // going to punt on the feature for now and just immediately tell the target
      // that it is visible on the page.
      if (isPlatformBrowser(this.platformId)) {
        target.updateVisibility(true, 1.0);
      }
    }
  }

  // Setup the IntersectionObserver with the given element as the root.
  public setup(element: Element = null, offset: number = 0) {

    // While the IntersectionObserver is supported in the modern browsers, it will
    // never be added to Internet Explorer (IE) and other browsers still need to
    // implement it. As such, we'll only use it if it's available.
    // And, if it's not, we'll fall-back to non-lazy behaviors.
    if (!window || !window['IntersectionObserver']) {
      return;
    }

    this.observer = new IntersectionObserver(
      this.handleIntersectionUpdate,
      {
        root: element,
        rootMargin: `${ offset }px`
      }
    );
  }

  // Remove the give LazyTarget implementation from the collection of objects being
  // tracked by the IntersectionObserver.
  public removeTarget(target: LazyTarget): void {

    // If IntersectionObserver is not supported, we never started tracking the
    // given target in the first place
    if (this.observer) {
      this.targets.delete(target.element);
      this.observer.unobserve(target.element);
    }
  }

  public teardown(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    this.targets.clear();
    this.targets = null;
  }

  // Handle changes in the visibility for elements being tracked by the intersection
  // observer
  private handleIntersectionUpdate = (entries: IntersectionObserverEntry[]): void => {
    for (const entry of entries) {
      const lazyTarget = this.targets.get(entry.target);

      if (lazyTarget) {
        lazyTarget.updateVisibility(
          entry.isIntersecting,
          entry.intersectionRatio
        );
      }
    }
  }
}
