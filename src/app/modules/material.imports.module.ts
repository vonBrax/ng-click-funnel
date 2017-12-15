import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const materialImports = [
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: materialImports,
  exports: materialImports
})
export class MaterialImportsModule { }
