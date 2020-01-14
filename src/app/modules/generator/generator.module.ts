/** angular */
import { NgModule } from '@angular/core';
/** end angular */

/** modules */
import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponentModule } from './generator-components.module';
/** end modules */

@NgModule({
  imports: [GeneratorRoutingModule, GeneratorComponentModule]
})
export class GeneratorModule {}
