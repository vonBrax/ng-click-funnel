import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { ClickOutsideDirective } from './directives/click-outside.directive';
import { HtmlPipe } from './pipes/html.pipe';

import { MaterialImportsModule } from './modules/material.imports.module';

// App components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneSelectorComponent } from './components/phone-selector/phone-selector.component';
import { ClickFunnelComponent } from './components/click-funnel/click-funnel.component';
import { RadioClickComponent } from './components/inputs/radio-click/radio-click.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { TosComponent } from './components/tos/tos.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ReviewStatsComponent } from './components/review-stats/review-stats.component';
import { PackageDealsComponent } from './components/package-deals/package-deals.component';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    HtmlPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhoneSelectorComponent,
    ClickFunnelComponent,
    RadioClickComponent,
    PersonalInfoComponent,
    TosComponent,
    HeroBannerComponent,
    HowItWorksComponent,
    ReviewStatsComponent,
    PackageDealsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
