import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule,MatCardModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';
import { navBarComponent } from './navBar.component';
import { FeaturesComponent } from './features.component';
import { PricingComponent } from './pricing.component';
import { SubmitComponent } from './submit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    navBarComponent,
    FeaturesComponent,
    PricingComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
