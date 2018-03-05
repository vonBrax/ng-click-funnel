import {
  NgModule,
  ModuleWithProviders,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
  Type,
  ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { ROUTES } from '@angular/router';

import { ComponentLoaderService } from '../services/component-loader.service';
import { ComponentManifest, DYNAMIC_COMPONENT, DYNAMIC_COMPONENT_MANIFESTS } from '../models/component-manifest';

@NgModule()
export class ComponentLoaderModule {
  static forRoot(manifests: ComponentManifest[]): ModuleWithProviders {
    return {
      ngModule: ComponentLoaderModule,
      providers: [
        ComponentLoaderService,
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        // provider for Angular CLI to analyze
        { provide: ROUTES, useValue: manifests, multi: true },
        // provider for ComponentLoaderService to analyze
        { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests }
      ]
    };
  }
  static forChild(component: Type<any>): ModuleWithProviders {
    return {
      ngModule: ComponentLoaderModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: component, multi: true },
        // Provider for @angular/router to parse
        { provide: ROUTES, useValue: [], multi: true },
        // Provider for ComponentLoaderService to analyze
        { provide: DYNAMIC_COMPONENT, useValue: component }
      ]
    };
  }
}

export { ComponentManifest } from '../models/component-manifest';
