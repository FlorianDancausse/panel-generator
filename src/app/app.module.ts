/** angular */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** modules */
import { AppRoutingModule } from './app-routing.module';
/** end modules */

/** components */
import { AppComponent } from './app.component';
import { BlocSizeComponent } from './shared/bloc-size/bloc-size.component';
import { BlocBorderComponent } from './shared/bloc-border/bloc-border.component';
/** components */

@NgModule({
  declarations: [AppComponent, BlocSizeComponent, BlocBorderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
