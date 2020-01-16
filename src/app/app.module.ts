import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrancheComponent } from './agence/branche/branche.component';
import { AjouterBrancheComponent } from './agence/ajouter-branche/ajouter-branche.component';
import { PackagesComponent } from './Package/packages/packages.component';
import { AddPackageComponent } from './package/add-package/add-package.component';
import { HotelsComponent } from './Hotel/hotels/hotels.component';
import { AddHotelComponent } from './Hotel/add-hotel/add-hotel.component';
import { ClientComponent } from './client/client.component';
import { ErreurComponent } from './erreur/erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BrancheComponent,
    AjouterBrancheComponent,
    PackagesComponent,
    AddPackageComponent,
    HotelsComponent,
    AddHotelComponent,
    ClientComponent,
    ErreurComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
