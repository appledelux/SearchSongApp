import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewerListComponent } from './viewer-list/viewer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProvidersService } from './services/providers.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
