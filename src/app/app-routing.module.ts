import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/generator',
    pathMatch: 'full'
  },
  {
    path: 'generator',
    loadChildren: () => import('./modules/generator/modules/generator.module').then(module => module.GeneratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
