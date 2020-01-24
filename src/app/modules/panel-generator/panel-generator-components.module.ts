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
import { PanelGeneratorComponent } from './components/panel-generator/panel-generator.component';
import { PanelSizeComponent } from './components/panel-generator/components/panel-size/panel-size.component';
import { PanelBorderComponent } from './components/panel-generator/components/panel-border/panel-border.component';
/** components */

const components = [PanelGeneratorComponent, PanelBorderComponent, PanelSizeComponent];

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
export class PanelGeneratorComponentModule {}
