import { NgModule } from '@angular/core';

import { LazySrcDirective } from '../directives/lazy-src.directive';
import { LazyViewport } from '../models/lazy-viewport';
import { LazyViewportDirective } from '../directives/lazy-viewport.directive';

@NgModule({
  declarations: [
    LazySrcDirective,
    LazyViewportDirective
  ],
  exports: [
    LazySrcDirective,
    LazyViewportDirective
  ],
  providers: [
    // Setup the default LazyViewport instance without an associated element. This
    // will create a IntersectionObserver that uses the browser's viewport as the
    // observer root. This way, an instance of LazyViewport is always available for
    // injection into other directives and services.
    // --
    // NOTE: This service will be overridden at lower-levels in the component tree
    // whenever a [lazyViewport] directive is applied.
    {
      provide: LazyViewport,
      useFactory: function() {
        const viewport = new LazyViewport();
        viewport.setup();
        return (viewport);
      }
    }
  ]
})
export class LazyModule { }
