import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocSizeComponent } from './shared/bloc-size/bloc-size.component';
import { BlocBorderComponent } from './shared/bloc-border/bloc-border.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocSizeComponent,
    BlocBorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
