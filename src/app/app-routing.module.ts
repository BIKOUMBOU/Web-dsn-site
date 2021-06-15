import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent} from './components/sites/sites.component';
import { AccueilComponent} from './components/accueil/accueil.component';
import { SiteEditComponent } from './components/site-edit/site-edit.component';
import { SiteAddComponent } from './components/site-add/site-add.component';


const routes: Routes = [
  {path:"sites", component:SitesComponent},
  {path:"GetAllSites", component:SitesComponent},
  {path:"addSite", component:SiteAddComponent},
  {path:"editSite/:id", component:SiteEditComponent},
  {path:"EditSite", component:SiteEditComponent},
  {path:"", component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule { }
