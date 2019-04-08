import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatSnackBarModule, MatFormFieldModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
})

export class MatModule {}
