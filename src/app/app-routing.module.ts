import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncrementComponent } from './components/increment';
import { ShowValueComponent } from './components/show-value';

const routes: Routes = [{ path: 'counter-one', loadChildren: () => import('./modules/counter-one/counter-one.module').then(m => m.CounterOneModule) }, { path: 'counter-lazy', loadChildren: () => import('./modules/counter-lazy/counter-lazy.module').then(m => m.CounterLazyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
