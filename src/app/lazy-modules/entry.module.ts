import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

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

// import { ComponentLoaderModule } from './component-loader.module';
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
    HttpClientJsonpModule,
    // ComponentLoaderModule.forChild(EntryComponent),
    MaterialImportsModule,
    PipesModule,
    LazyModule,
    ClickOutsideModule
  ],
  exports: [
    EntryComponent
  ]
})
export class EntryModule {}
