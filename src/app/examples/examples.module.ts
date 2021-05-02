import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleInputComponent } from './input/example-input/example-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '../components/table/table.module';
import { InputModule } from '../components/input/input.module';
import { ExampleSimpleTableComponent } from './table/example-simple-table/example-simple-table.component';
import { ExampleBasicTableComponent } from './table/example-basic-table/example-basic-table.component';



@NgModule({
  declarations: [ExampleInputComponent, ExampleSimpleTableComponent, ExampleBasicTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,

    TableModule,
    InputModule
  ],
  exports:[ ]
})
export class ExamplesModule { }
