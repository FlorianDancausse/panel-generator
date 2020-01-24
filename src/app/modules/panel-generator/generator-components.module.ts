/** angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
/** end angular */

/** components */
import { GeneratorComponent } from './components/panel-generator/generator.component';
import { BlocSizeComponent } from './components/bloc-size/bloc-size.component';
import { BlocBorderComponent } from './components/bloc-border/bloc-border.component';
/** components */

const components = [GeneratorComponent, BlocBorderComponent, BlocSizeComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: components
})
export class GeneratorComponentModule {}
