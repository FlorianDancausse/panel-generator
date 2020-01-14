/** angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** end angular */

/** modules */
import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorComponentModule } from './generator-components.module';
/** end modules */

@NgModule({
  imports: [CommonModule, GeneratorRoutingModule, GeneratorComponentModule]
})
export class GeneratorModule {}
