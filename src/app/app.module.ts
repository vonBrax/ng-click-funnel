import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ComponentManifest } from './models/component-manifest';
import { ComponentLoaderModule } from './modules/component-loader.module';
import { InitialLoadModule } from './modules/initial-load.module';

const manifests: ComponentManifest[] = [
  // {
  //   componentId: 'entry',
  //   path: 'entry',
  //   loadChildren: './lazy-modules/entry.module#EntryModule'
  // },
  {
    componentId: 'sections-below',
    path: 'sections-below',
    loadChildren: './modules/sections-below.module#SectionsBelowModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-click-funnel'}),
    BrowserAnimationsModule,
    InitialLoadModule,
    ComponentLoaderModule.forRoot(manifests)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
