import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponentComponent } from './news-component/news-component.component';
import { TopPageComponent } from './top-page/top-page.component';
import { NewsComponent } from './news/news.component';
import { HelpComponent } from './help/help.component';
import { NewsListComponent } from './news-list/news-list.component'
import { AboutComponent } from './about/about.component';
import { News202209Component } from './news202209/news202209.component';
import { News202210Component } from './news202210/news202210.component';
import { News202211Component } from './news202211/news202211.component';
import { News202212Component } from './news202212/news202212.component';
import { News202301Component } from './news202301/news202301.component';


const routes: Routes = [
  {path:'TopPage',component:TopPageComponent},
  {path:'newslist',component:NewsListComponent},
  {path:'help',component:HelpComponent},
  {path:'about',component:AboutComponent},
  {path:'newsExample',component:NewsComponent},
  {path:'news202209',component:News202209Component},
  {path:'news202210',component:News202210Component},
  {path:'news202211',component:News202211Component},
  {path:'news202212',component:News202212Component},
  {path:'news202301',component:News202301Component},
  {path:'',redirectTo:'/TopPage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing:false,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
