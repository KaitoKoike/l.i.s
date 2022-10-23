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
import { News2022092101Component } from './news2022092101/news2022092101.component';
import { News2022092102Component } from './news2022092102/news2022092102.component';
import { News2022092301Component } from './news2022092301/news2022092301.component';
import { News2022092302Component } from './news2022092302/news2022092302.component';
import { News2022092401Component } from './news2022092401/news2022092401.component';
import { News2022092402Component } from './news2022092402/news2022092402.component';
import { News2022092801Component } from './news2022092801/news2022092801.component';
import { News2022092901Component } from './news2022092901/news2022092901.component';


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
    News2022092101Component,
    News2022092102Component,
    News2022092301Component,
    News2022092302Component,
    News2022092401Component,
    News2022092402Component,
    News2022092801Component,
    News2022092901Component
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

