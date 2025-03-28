import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponentComponent } from './news-component/news-component.component';
import { TopPageComponent } from './top-page/top-page.component';
import { HelpComponent } from './help/help.component';
import { NewsListComponent } from './news-list/news-list.component'
import { AboutComponent } from './about/about.component';
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
import { News202403Component } from './news202403/news202403.component';
import { News20250302Component } from './news20250302/news20250302.component';
import { News202503Component } from './news20250301/news202503.component';




const routes: Routes = [
  {path:'TopPage',component:TopPageComponent},
  {path:'newslist',component:NewsListComponent},
  {path:'help',component:HelpComponent},
  {path:'about',component:AboutComponent},
  {path:'news202209',component:News202209Component},
  {path:'news202210',component:News202210Component},
  {path:'news202211',component:News202211Component},
  {path:'news202212',component:News202212Component},
  {path:'news202301',component:News202301Component},
  {path:'news202303',component:News202303Component},
  {path:'news202304',component:News202304Component},
  {path:'news202305',component:News202305Component},
  {path:'news202306',component:News202306Component},
  {path:'news202307',component:News202307Component},
  {path:'news202308',component:News202308Component},
  {path:'news202309',component:News202309Component},
  {path:'news202310',component:News202310Component},
  {path:"news202311",component:News202311Component},
  {path:"news202403",component:News202403Component},
  {path:"news20250301",component:News202503Component},
  {path:"news20250302",component:News20250302Component},
  {path:"brands/andreas",component:AndreasComponent},
  {path:"brands/damico",component:DamicoComponent},
  {path:"brands/devore",component:DevoreComponent},
  {path:"brands/ernesto",component:ErnestoComponent},
  {path:"brands/gfb",component:GFBComponent},
  {path:"brands/ruffo",component:RuffoComponent},
  {path:"brands/stefano",component:StefanoComponent},
  {path:"brands/sozzimilano",component:SMilanoComponent},
  {path:"brands/rr",component:RRComponent},
  {path:'',redirectTo:'/TopPage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing:false,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
