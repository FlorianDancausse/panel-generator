/** angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** end angular */

/** component */
import { GeneratorComponent } from '../generator.component';
/** end component */

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule {}
