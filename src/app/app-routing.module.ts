import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrancheComponent } from './agence/branche/branche.component';
import { PackagesComponent } from './Package/packages/packages.component';
import { HotelsComponent } from './Hotel/hotels/hotels.component';
import { ClientComponent } from './client/client.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AjouterBrancheComponent } from './agence/ajouter-branche/ajouter-branche.component';
import { AddPackageComponent } from './package/add-package/add-package.component';
import { AddHotelComponent } from './Hotel/add-hotel/add-hotel.component';
const routes: Routes = [
  { path: 'branche', component: BrancheComponent },
  { path: 'addBranche', component: AjouterBrancheComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'addpackages', component: AddPackageComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'addhotels', component: AddHotelComponent },
  { path: 'clients', component: ClientComponent },
  { path: '', redirectTo: 'packages', pathMatch: 'full' },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
