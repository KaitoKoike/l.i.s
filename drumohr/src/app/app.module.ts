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
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CustomBreakPointsProvider, CustomLayoutDirective } from './custom-BREAKPOINTS';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  } from "@angular/material";

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
    GridModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
})
export class AppModule { 
}
