import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandItemComponent } from './components/brand-item/brand-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    BrandItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
