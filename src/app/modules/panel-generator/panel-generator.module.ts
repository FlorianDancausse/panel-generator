/** angular */
import { NgModule } from '@angular/core';
/** end angular */

/** modules */
import { GeneratorRoutingModule } from './panel-generator-routing.module';
import { PanelGeneratorComponentModule } from './panel-generator-components.module';
/** end modules */

@NgModule({
  imports: [GeneratorRoutingModule, PanelGeneratorComponentModule]
})
export class GeneratorModule {}
