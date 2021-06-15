import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SitesComponent } from './components/sites/sites.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { SitesService} from './services/sites.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteAddComponent } from './components/site-add/site-add.component';
import { SiteEditComponent } from './components/site-edit/site-edit.component';
import { SiteInfosComponent } from './components/site-infos/site-infos.component';
import { SiteListComponent } from './components/site-list/site-list.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SitesComponent,
    AccueilComponent,
    SiteAddComponent,
    SiteEditComponent,
    SiteInfosComponent,
    SiteListComponent,
 
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
