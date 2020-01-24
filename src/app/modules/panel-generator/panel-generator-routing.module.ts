/** angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** end angular */

/** component */
import { PanelGeneratorComponent } from './components/panel-generator/panel-generator.component';
/** end component */

const routes: Routes = [
  {
    path: '',
    component: PanelGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule {}
