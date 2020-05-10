import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageComponentComponent } from './affichage-component/affichage-component.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-poke--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { PontService } from './pont.service';
import { Routes, Router, RouterModule } from '@angular/router';
import "@angular/compiler";
import { ListingComponent } from './listing/listing.component';

const appRoutes : Routes = [{ path : 'affichage', component : AffichageComponentComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AffichageComponentComponent,
    ListingComponent,
    FilterPokemonPipePipe,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServiceService, PontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
