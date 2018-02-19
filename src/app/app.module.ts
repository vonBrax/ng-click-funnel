import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ComponentManifest } from './lazy-modules/component-manifest';
import { ComponentLoaderModule } from './lazy-modules/component-loader.module';
// import { MaterialImportsModule } from './modules/material.imports.module';
import { EntryModule } from './lazy-modules/entry.module';

const manifests: ComponentManifest[] = [
  // {
  //   componentId: 'entry',
  //   path: 'entry',
  //   loadChildren: './lazy-modules/entry.module#EntryModule'
  // },
  {
    componentId: 'rest',
    path: 'rest',
    loadChildren: './lazy-modules/rest.module#RestModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-click-funnel'}),
    BrowserAnimationsModule,
    // MaterialImportsModule,
    EntryModule,
    ComponentLoaderModule.forRoot(manifests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
