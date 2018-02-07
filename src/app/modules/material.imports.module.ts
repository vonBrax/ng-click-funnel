import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
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
  MatToolbarModule,
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
