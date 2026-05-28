import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero-page.component';
import { DragonballSuperPage } from './pages/dragonball-super/dragonball-super-page';
import { DragonballPage } from './pages/dragonball/dragonball-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'dragonball',
    component: DragonballPage
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage
  },
  {
    path: '**',
    redirectTo: '' //para rutas no definidas, redirige a la ruta raíz
  },
];
