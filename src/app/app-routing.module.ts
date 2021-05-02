import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleInputComponent } from './examples/input/example-input/example-input.component';
import { ExampleSimpleTableComponent } from './examples/table/example-simple-table/example-simple-table.component';

const routes: Routes = [
  {
    path: 'example-input',
    component: ExampleInputComponent
  },
  {
    path: 'example-simple-table',
    component: ExampleSimpleTableComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
