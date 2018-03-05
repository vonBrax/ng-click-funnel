import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentLoaderModule } from '../modules/component-loader.module';
import { LazyModule } from '../modules/lazy.module';
import { MaterialImportsModule } from '../modules/material.imports.module';
import { PipesModule } from '../pipes/pipes.module';

import { ScrollToDirective } from '../directives/smooth-scroll.directive';

import { PatientStoriesComponent } from '../components/patient-stories/patient-stories.component';
import { ReviewStatsComponent } from '../components/review-stats/review-stats.component';
import { PackageDealsComponent } from '../components/package-deals/package-deals.component';
import { WhatIsHtComponent } from '../components/what-is-ht/what-is-ht.component';
import { CtaInlineComponent } from '../components/cta-inline/cta-inline.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { CtaWithImageComponent } from '../components/cta-with-image/cta-with-image.component';
import { AccreditationsComponent } from '../components/accreditations/accreditations.component';
import { CtaPlainComponent } from '../components/cta-plain/cta-plain.component';
import { DisclaimerComponent } from '../components/disclaimer/disclaimer.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SvgAngleRightCircleComponent } from '../components/svg-angle-right-circle/svg-angle-right-circle.component';
import { SvgHtIconComponent } from '../components/svg-ht-icon/svg-ht-icon.component';
import { SvgQuoteComponent } from '../components/svg-quote/svg-quote.component';
import { SvgStarComponent } from '../components/svg-star/svg-star.component';
import { SvgStar2Component } from '../components/svg-star2/svg-star2.component';
import { SectionsBelowComponent } from '../components/chunks/sections-below/sections-below.component';

@NgModule({
  declarations: [
    PatientStoriesComponent,
    ReviewStatsComponent,
    ReviewsComponent,
    PackageDealsComponent,
    WhatIsHtComponent,
    CtaInlineComponent,
    ReviewsComponent,
    CtaWithImageComponent,
    AccreditationsComponent,
    CtaPlainComponent,
    DisclaimerComponent,
    FooterComponent,
    SvgAngleRightCircleComponent,
    SvgHtIconComponent,
    SvgQuoteComponent,
    SvgStarComponent,
    SvgStar2Component,
    SectionsBelowComponent,
    ScrollToDirective
  ],
  imports: [
    CommonModule,
    ComponentLoaderModule.forChild(SectionsBelowComponent),
    MaterialImportsModule,
    LazyModule,
    PipesModule
  ]
})
export class SectionsBelowModule { }
