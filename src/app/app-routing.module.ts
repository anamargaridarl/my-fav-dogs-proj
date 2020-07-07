import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashCreateComponent } from './components/dash-create/dash-create.component';
import { DashInfoComponent } from './components/dash-info/dash-info.component';


const routes: Routes = [
  { path: '', component: DashInfoComponent },
  { path: 'create', component: DashCreateComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
