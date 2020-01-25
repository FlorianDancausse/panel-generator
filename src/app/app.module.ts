/** angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** components */
import { AppComponent } from './app.component';
/** components */

/** modules */
import { AppRoutingModule } from './app-routing.module';
import { AngularSharedModule } from './shared/modules/angular-shared.module';
/** end modules */

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, AngularSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
