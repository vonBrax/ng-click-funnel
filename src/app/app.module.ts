import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ClickOutsideDirective } from './directives/click-outside.directive';
import { HtmlPipe } from './pipes/html.pipe';

// App components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneSelectorComponent } from './components/phone-selector/phone-selector.component';
import { ClickFunnelComponent } from './components/click-funnel/click-funnel.component';
import { RadioClickComponent } from './components/inputs/radio-click/radio-click.component';

import { MaterialImportsModule } from './modules/material.imports.module';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    HtmlPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhoneSelectorComponent,
    ClickFunnelComponent,
    RadioClickComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
