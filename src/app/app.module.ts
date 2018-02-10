import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ScrollToDirective } from './directives/smooth-scroll.directive';
import { HtmlPipe } from './pipes/html.pipe';
import { SafePipe } from './pipes/safe.pipe';

import { MaterialImportsModule } from './modules/material.imports.module';

// App components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhoneSelectorComponent } from './components/phone-selector/phone-selector.component';
import { ClickFunnelComponent } from './components/click-funnel/click-funnel.component';
import { RadioClickComponent } from './components/inputs/radio-click/radio-click.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { IntlTelInputComponent } from './components/intl-tel-input/intl-tel-input.component';
import { TosComponent } from './components/tos/tos.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ReviewStatsComponent } from './components/review-stats/review-stats.component';
import { PackageDealsComponent } from './components/package-deals/package-deals.component';
import { SvgStarComponent } from './components/svg-star/svg-star.component';
import { PatientStoriesComponent } from './components/patient-stories/patient-stories.component';
import { SvgAngleRightCircleComponent } from './components/svg-angle-right-circle/svg-angle-right-circle.component';
import { WhatIsHtComponent } from './components/what-is-ht/what-is-ht.component';
import { SvgHtIconComponent } from './components/svg-ht-icon/svg-ht-icon.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AccreditationsComponent } from './components/accreditations/accreditations.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { CtaPlainComponent } from './components/cta-plain/cta-plain.component';
import { CtaInlineComponent } from './components/cta-inline/cta-inline.component';
import { CtaWithImageComponent } from './components/cta-with-image/cta-with-image.component';
import { SvgQuoteComponent } from './components/svg-quote/svg-quote.component';
import { SvgStar2Component } from './components/svg-star2/svg-star2.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    ScrollToDirective,
    HtmlPipe,
    SafePipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhoneSelectorComponent,
    ClickFunnelComponent,
    RadioClickComponent,
    PersonalInfoComponent,
    IntlTelInputComponent,
    TosComponent,
    HeroBannerComponent,
    HowItWorksComponent,
    ReviewStatsComponent,
    PackageDealsComponent,
    SvgStarComponent,
    PatientStoriesComponent,
    SvgAngleRightCircleComponent,
    WhatIsHtComponent,
    SvgHtIconComponent,
    ReviewsComponent,
    AccreditationsComponent,
    DisclaimerComponent,
    CtaPlainComponent,
    CtaInlineComponent,
    CtaWithImageComponent,
    SvgQuoteComponent,
    SvgStar2Component,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
