import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';
import { ObservatesComponent } from './observates/observates.component';


const routes: Routes = [
  {
    path: '',
    component: RatesComponent
  },
  {
    path: 'observate',
    component: ObservatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatesRoutingModule { }
