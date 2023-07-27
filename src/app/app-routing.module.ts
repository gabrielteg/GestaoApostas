import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecrutadoresComponent } from './recrutadores/recrutadores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
 {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
 {path: 'recrutadores', component: RecrutadoresComponent},
 {path: 'clientes', component: ClientesComponent},
 {path: 'perfil', component: PerfilComponent},
 {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
