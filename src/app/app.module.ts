import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatCardSubtitle} from '@angular/material/card';
import { TableModule } from './components/table/table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExamplesModule } from './examples/examples.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,

    ExamplesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
 ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
