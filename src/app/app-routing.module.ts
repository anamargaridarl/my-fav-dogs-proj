import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashInfoComponent } from './components/dash-info/dash-info.component';
import { BreedImageComponent } from './components/breed-image/breed-image.component';
import { FavouritesComponent } from './components/favourites/favourites.component';



const routes: Routes = [
  { path: '', component: DashInfoComponent },
  { path: 'breed/:breedId', component: BreedImageComponent },
  { path: 'favourites', component: FavouritesComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
