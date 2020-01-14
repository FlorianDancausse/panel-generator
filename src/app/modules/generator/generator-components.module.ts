/** angular */
import { NgModule } from '@angular/core';
/** end angular */

/** components */
import { GeneratorComponent } from './components/generator/generator.component';
import { BlocBorderComponent } from './components/generator/components/bloc-border/bloc-border.component';
import { BlocSizeComponent } from './components/generator/components/bloc-size/bloc-size.component';
/** components */

const components = [GeneratorComponent, BlocBorderComponent, BlocSizeComponent];

@NgModule({
  declarations: components
})
export class GeneratorComponentModule {}
