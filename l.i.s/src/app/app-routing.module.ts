import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponentComponent } from './news-component/news-component.component';
import { TopPageComponent } from './top-page/top-page.component';
import { NewsComponent } from './news/news.component';
import { HelpComponent } from './help/help.component';
import { NewsListComponent } from './news-list/news-list.component'
import { AboutComponent } from './about/about.component';
import { News2022092101Component } from './news2022092101/news2022092101.component';
import { News2022092102Component } from './news2022092102/news2022092102.component';
import { News2022092301Component } from './news2022092301/news2022092301.component';
import { News2022092302Component } from './news2022092302/news2022092302.component';
import { News2022092401Component } from './news2022092401/news2022092401.component';
import { News2022092402Component } from './news2022092402/news2022092402.component';
import { News2022092801Component } from './news2022092801/news2022092801.component';
import { News2022092901Component } from './news2022092901/news2022092901.component';


const routes: Routes = [
  {path:'TopPage',component:TopPageComponent},
  {path:'newslist',component:NewsListComponent},
  {path:'help',component:HelpComponent},
  {path:'about',component:AboutComponent},
  {path:'newsExample',component:NewsComponent},
  {path:'news2022092101',component:News2022092101Component},
  {path:'news2022092102',component:News2022092102Component},
  {path:'news2022092301',component:News2022092301Component},
  {path:'news2022092302',component:News2022092302Component},
  {path:'news2022092401',component:News2022092401Component},
  {path:'news2022092402',component:News2022092402Component},
  {path:'news2022092801',component:News2022092801Component},
  {path:'news2022092901',component:News2022092901Component},
  {path:'',redirectTo:'/TopPage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing:false,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
