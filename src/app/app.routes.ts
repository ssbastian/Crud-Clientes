import { Directive } from '@angular/core';
import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivaComponent } from './directivas/directiva.component';

export const routes: Routes = [
  { path: '', redirectTo: '/directivas', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent }
];
