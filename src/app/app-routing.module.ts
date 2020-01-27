import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(a => a.AboutModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(c => c.ContactsModule)
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'car',
    loadChildren: () => import('./flow/car/car.module').then(c => c.CarModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./inject/converter/converter.module').then(c => c.ConverterModule)
  },
  {
    path: 'rates',
    loadChildren: () => import('./http/rates/rates.module').then(r => r.RatesModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
