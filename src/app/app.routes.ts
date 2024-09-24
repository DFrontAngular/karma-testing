import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';

export const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
];
