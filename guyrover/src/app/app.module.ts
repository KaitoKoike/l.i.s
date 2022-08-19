import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule  } from "@angular/material/toolbar";
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule} from '@angular/material/icon';
// フォーム作成用モジュール
// フォーム作成用モジュール


import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HelpFormWrapper} from './help/help-form-wrapper.component';
import { EmailValidator, EmailValitorMessage, HelpComponent, PostalCodeValidator, PostalCodeValitorMessage } from './help/help.component';


import { CustomBreakPointsProvider, CustomLayoutDirective } from './custom-BREAKPOINTS';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    ShopPageComponent,
    HelpComponent,
    AboutComponent,
    HelpFormWrapper,
    CustomLayoutDirective

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    GridModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
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
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
})
export class AppModule { 
}
