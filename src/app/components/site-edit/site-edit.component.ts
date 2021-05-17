import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SitesService } from 'src/app/services/sites.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
})
export class SiteEditComponent implements OnInit {

  siteId:number;
    siteFormGroup?:FormGroup;
    private submitted:boolean=false;
    
    constructor(private activatedRoute:ActivatedRoute,
               private sitesService:SitesService, 
               private fb:FormBuilder) {
     this.siteId=activatedRoute.snapshot.params.id;
    }
    
  //Initialisation de Formgroup pour créer un ou des groupe(s) de contrôle sous forme d'un tableau
    ngOnInit(): void {
      this.sitesService.getSite(this.siteId)
      .subscribe(site=>{
      this.siteFormGroup=this.fb.group({
        id:[site.id,Validators.required], 
        priorite:[site.priorite,Validators.required],      
        nom:[site.nom,Validators.required],         
        siren:[site.siren,Validators.required],          
        statusinstal:[site.statusinstal,Validators.required],     
        hebergement:[site.hebergement,Validators.required],     
        acces:[site.acces,Validators.required],     
        resprojet:[site.resprojet,Validators.required],     
        consuldsn:[site.consuldsn,Validators.required],    
        versagirh:[site.versagirh,Validators.required],    
        versprodige:[site.versprodige,Validators.required],  
        ifp:[site.ifp,Validators.required],            
        mirth:[site.mirth,Validators.required],           
        webserph7:[site.webserph7,Validators.required],       
        configagirh:[site.configagirh,Validators.required],      
        configprodige:[site.configprodige,Validators.required],    
        nomencdesabsences:[site.nomencdesabsences,Validators.required], 
        nomencdesemplois:[site.nomencdesemplois,Validators.required], 
        nomencdestatuts:[site.nomencdestatuts,Validators.required],
          })
        });
    }
    onUpdateSite() {
      console.log("cliqué");
      this.submitted=true;
      this.sitesService.updateSite(this.siteFormGroup?.value)
        .subscribe(data=>{
          alert("Information(s) mise(s) à jour avec succès");
        });
    }

  }



  
  