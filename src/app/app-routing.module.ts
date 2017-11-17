import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';
import { FeaturesComponent } from './features.component';
import { PricingComponent } from './pricing.component';
import { SubmitComponent } from './submit.component';

const routes: Routes = [
  {
    path:'', component:AppComponent,
    children: [],
  },
  {
    path:'about', component:AboutComponent,
    children: [],
  }, 
  {
    path:'index', component:IndexComponent,
    children: [],
  },
  {
    path:'features', component:FeaturesComponent,
    children: [],
  },
  {
    path:'pricing', component:PricingComponent,
    children: [],
  },
  {
    path:'submit', component:SubmitComponent,
    children: [],
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
