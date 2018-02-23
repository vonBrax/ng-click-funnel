import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// HTTP Requests and cache imports
import { HttpClientModule, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';
import { ɵb, ɵd } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptorService } from '../services/caching-interceptor.service';
import { RequestCache, RequestCacheWithMap } from '../services/request-cache.service';

// Components imports
import { HeaderComponent } from '../components/header/header.component';
import { PhoneSelectorComponent } from '../components/phone-selector/phone-selector.component';
import { HeroBannerComponent } from '../components/hero-banner/hero-banner.component';
import { ClickFunnelComponent } from '../components/click-funnel/click-funnel.component';
import { RadioClickComponent } from '../components/radio-click/radio-click.component';
import { PersonalInfoComponent } from '../components/personal-info/personal-info.component';
import { IntlTelInputComponent } from '../components/intl-tel-input/intl-tel-input.component';
import { TosComponent } from '../components/tos/tos.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { HowItWorksComponent } from '../components/how-it-works/how-it-works.component';
import { EntryComponent } from './entry.component';

import { MaterialImportsModule } from '../modules/material.imports.module';
import { PipesModule } from '../pipes/pipes.module';
import { LazyModule } from '../modules/lazy.module';
import { ClickOutsideModule } from '../directives/click-outside.module';

@NgModule({
  declarations: [
    HeaderComponent,
    PhoneSelectorComponent,
    HeroBannerComponent,
    ClickFunnelComponent,
    RadioClickComponent,
    PersonalInfoComponent,
    IntlTelInputComponent,
    TosComponent,
    ContactUsComponent,
    HowItWorksComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialImportsModule,
    PipesModule,
    LazyModule,
    ClickOutsideModule
  ],
  providers: [
    JsonpClientBackend,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    { provide: ɵb, useFactory: ɵd },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true }
  ],
  exports: [
    EntryComponent
  ]
})
export class EntryModule {}
