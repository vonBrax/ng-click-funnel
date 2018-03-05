import { Component, ViewChild, ViewContainerRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ComponentLoaderService } from './services/component-loader.service';

// import { EntryComponent } from './lazy-modules/entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  @ViewChild('modulesOutlet', {read: ViewContainerRef}) modulesOutlet: ViewContainerRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private componentLoader: ComponentLoaderService ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.loadComponent('sections-below');
      });
    }
  }

  loadComponent(component: string): void {
    this.componentLoader
      .getComponentFactory<Component>(component)
      .subscribe(componentFactory => {
        this.modulesOutlet.createComponent(componentFactory);
      }, error => {
        console.warn(error);
      });
  }
}
