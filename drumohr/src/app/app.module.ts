import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';

// フォーム作成用モジュール
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CustomBreakPointsProvider, CustomLayoutDirective } from './custom-BREAKPOINTS';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    CustomLayoutDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    GridModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
