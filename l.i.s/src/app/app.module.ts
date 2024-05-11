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
import { News202303Component } from './news202303/news202303.component';
import { News202304Component } from './news202304/news202304.component';
import { News202305Component } from './news202305/news202305.component';
import { News202306Component } from './news202306/news202306.component';
import { News202307Component } from './news202307/news202307.component';
import { News202308Component } from './news202308/news202308.component';
import { News202309Component } from './news202309/news202309.component';
import { News202310Component } from './news202310/news202310.component';
import { News202311Component } from './news202311/news202311.component';
import { AndreasComponent } from './brands/andreas/andreas.component';
import { DamicoComponent } from './brands/damico/damico.component';
import { DevoreComponent } from './brands/devore/devore.component';
import { ErnestoComponent } from './brands/ernesto/ernesto.component';
import { GFBComponent } from './brands/gfb/gfb.component';
import { RuffoComponent } from './brands/ruffo/ruffo.component';
import { StefanoComponent } from './brands/stefano/stefano.component';
import { SMilanoComponent } from './brands/sozzimilano/smilano.component';
import { RRComponent } from './brands/RR/rr.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { News202403Component } from './news202403/news202403.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    BrandComponentsComponent,
    NewsComponentComponent,
    TopPageComponent,
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
    News202303Component,
    News202304Component,
    News202305Component,
    News202306Component,
    News202307Component,
    News202308Component,
    News202309Component,
    News202310Component,
    News202311Component,
    News202403Component,
    AndreasComponent,
    DamicoComponent,
    DevoreComponent,
    ErnestoComponent,
    GFBComponent,
    RuffoComponent,
    StefanoComponent,
    SMilanoComponent,
    RRComponent,
    PageHeaderComponent,
    News202403Component
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

