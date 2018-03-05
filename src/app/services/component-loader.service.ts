import {
  Injectable,
  Inject,
  Injector,
  NgModuleFactoryLoader,
  ComponentFactory } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromPromise as ObservableFromPromise } from 'rxjs/observable/fromPromise';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';

import { DYNAMIC_COMPONENT, DYNAMIC_COMPONENT_MANIFESTS, ComponentManifest } from '../models/component-manifest';

@Injectable()
export class ComponentLoaderService {

  constructor(
    @Inject(DYNAMIC_COMPONENT_MANIFESTS) private manifests: ComponentManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) { }

  // Retrieve a ComponentFactory, based on the specified componentId (defined
  // in the ComponentManifest array)
  public getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest = this.manifests
      .find(m => m.componentId === componentId);

    if (!manifest) {
      return ObservableThrow(`ComponentLoaderService: Unknown componentId "${componentId}"`);
    }

    const p = this.loader.load(manifest.loadChildren)
      .then(ngModuleFactory => {
        const moduleRef = ngModuleFactory.create(injector || this.injector);

        // Read from the moduleRef injector and locate the dynamic component type
        const dynamicComponentType = moduleRef.injector.get(DYNAMIC_COMPONENT);

        if (!dynamicComponentType) {
          throw new Error(
            `ComponentLoaderService: Dynamic module for componentId "${componentId}" does not contain DYNAMIC_COMPONENT as a provider.`,
          );
        }

        // Resolve this component factory
        return moduleRef.componentFactoryResolver.resolveComponentFactory<T>(dynamicComponentType);
      });

      return ObservableFromPromise(p);
  }
}
