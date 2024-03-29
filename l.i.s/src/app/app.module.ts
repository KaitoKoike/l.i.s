import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTable, MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import {MatCardModule} from '@angular/material/card';
import {BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule} from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout';

// 画像スライダー用モジュール
import { SlickCarouselModule } from 'ngx-slick-carousel';

// フォーム作成用モジュール
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

// コンポーネントのインストール
import {ImageCarouselComponent} from './image-carousel/image-carousel.component';
import { BrandComponentsComponent } from './brand-components/brand-components.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { ObserveElementDirective, TopPageComponent } from './top-page/top-page.component';
import { NewsComponent } from './news/news.component';
import { EmailValidator, EmailValitorMessage, HelpComponent, PostalCodeValidator, PostalCodeValitorMessage } from './help/help.component';
import { NewsListComponent } from './news-list/news-list.component'
import { AboutComponent } from './about/about.component'
import { HelpFormWrapper} from './help/help-form-wrapper.component';
import { CustomLayoutDirective, CustomBreakPointsProvider } from './custom-BREAKPOINTS';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { News202209Component } from './news202209/news202209.component';
import { News202210Component } from './news202210/news202210.component';
import { News202211Component } from './news202211/news202211.component';
import { News202212Component } from './news202212/news202212.component';
import { News202301Component } from './news202301/news202301.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    BrandComponentsComponent,
    NewsComponentComponent,
    TopPageComponent,
    NewsComponent,
    HelpComponent,
    NewsListComponent,
    AboutComponent,
    HelpFormWrapper,
    CustomLayoutDirective,
    ObserveElementDirective,
    News202209Component,
    News202210Component,
    News202211Component,
    News202212Component,
    News202301Component,
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    GridModule,
    FormlyModule.forRoot({
      wrappers:[
        {name:'help-form',component:HelpFormWrapper},
      ],
      validators:[
        {name:'postal_code',validation:PostalCodeValidator},
        {name:'email',validation:EmailValidator},
      ],
      validationMessages:[
        {name:'required',message:'必須項目です'},
        {name:'postal_code',message:PostalCodeValitorMessage},
        {name:'email',message:EmailValitorMessage}
      ]
    }),
    FormlyBootstrapModule,
    FlexLayoutModule.withConfig({disableDefaultBps: true}),
  ],
  providers: [
    CustomBreakPointsProvider
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

