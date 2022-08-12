import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { TopPageComponent } from './top-page/top-page.component';

const routes: Routes = [
  {path:'TopPage',component:TopPageComponent},
  {path:'ShopPage',component:ShopPageComponent},
  {path:'Conntact',component:HelpComponent},
  {path:'About',component:AboutComponent},
  {path:'',redirectTo:'/TopPage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
