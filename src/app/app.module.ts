import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { EntryModule } from './lazy-modules/entry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-click-funnel'}),
    BrowserAnimationsModule,
    EntryModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
