import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import {ImageCarouselComponent} from './image-carousel/image-carousel.component';
import { BrandComponentsComponent } from './brand-components/brand-components.component';
import { NewsComponentComponent } from './news-component/news-component.component'

@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    BrandComponentsComponent,
    NewsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }