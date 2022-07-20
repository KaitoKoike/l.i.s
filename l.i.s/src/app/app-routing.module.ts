import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponentComponent } from './news-component/news-component.component';
import { TopPageComponent } from './top-page/top-page.component';
import { NewsComponent } from './news/news.component';
import { HelpComponent } from './help/help.component';
import { NewsListComponent } from './news-list/news-list.component'
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'TopPage',component:TopPageComponent},
  {path:'newslist',component:NewsListComponent},
  {path:'help',component:HelpComponent},
  {path:'about',component:AboutComponent},
  {path:'newsExample',component:NewsComponent},
  {path:'',redirectTo:'/TopPage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
