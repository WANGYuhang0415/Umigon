import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';

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

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
