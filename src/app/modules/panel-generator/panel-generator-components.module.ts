/** angular */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
/** end angular */

/** components */
import { PanelGeneratorComponent } from './components/panel-generator/panel-generator.component';
import { PanelSizeComponent } from './components/panel-generator/components/panel-size/panel-size.component';
import { PanelBorderComponent } from './components/panel-generator/components/panel-border/panel-border.component';
/** end components */

/** modules */
import { AngularSharedModule } from 'src/app/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/app/shared/modules/angular-material-shared.module';
/** end modules */

const components = [PanelGeneratorComponent, PanelBorderComponent, PanelSizeComponent];

@NgModule({
  declarations: components,
  imports: [AngularSharedModule, AngularSharedModule, AngularMaterialSharedModule]
})
export class PanelGeneratorComponentModule {}
