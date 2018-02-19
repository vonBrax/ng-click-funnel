import { NgModule } from '@angular/core';
import { HtmlPipe } from './html.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    HtmlPipe,
    SafePipe
  ],
  exports: [
    HtmlPipe,
    SafePipe
  ]
})
export class PipesModule { }
