import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplecomponentComponent } from './simplecomponent/simplecomponent.component';

import { HttpClientModule } from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SimplecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
