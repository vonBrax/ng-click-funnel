import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatProgressBarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatAutocompleteModule
} from '@angular/material';

const materialImports = [
  MatCardModule,
  MatProgressBarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatAutocompleteModule
];

@NgModule({
  imports: materialImports,
  exports: materialImports
})
export class MaterialImportsModule { }
