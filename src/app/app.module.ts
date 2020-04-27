import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatButtonModule,
  MatIconModule,
  MatSortModule,
  MatTabsModule,
  MatOptionModule,
  MatSelectModule,
  MatTreeModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatTreeModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatTreeModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
