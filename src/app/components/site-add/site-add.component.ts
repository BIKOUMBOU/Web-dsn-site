import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SitesService } from 'src/app/services/sites.service';


@Component({
  selector: 'app-site-add',
  templateUrl: './site-add.component.html',
 
})
export class SiteAddComponent implements OnInit {

 // Déclaration d'un attribut FormGroup de type ForGroupe
 siteFormGroup?:FormGroup;

 submitted: boolean=false;


 constructor(private fb:FormBuilder,
             private sitesService: SitesService) { }

 ngOnInit(): void {
   //Initialisation de Formgroup pour créer un ou des groupe(s) de contrôle sous forme d'un tableau
   this.siteFormGroup=this.fb.group({
     priorite:["",Validators.required],      
     nom:["",Validators.required],         
     siren:["",Validators.required],          
     statusinstal:["",Validators.required],     
     hebergement:["",Validators.required],     
     acces:["",Validators.required],     
     resprojet:["",Validators.required],     
     consuldsn:["",Validators.required],    
     versagirh:["",Validators.required],    
     versprodige:["",Validators.required],  
     ifp:["",Validators.required],            
     mirth:["",Validators.required],           
     webserph7:["",Validators.required],       
     configagirh:["",Validators.required],      
     configprodige:["",Validators.required],    
     nomencdesabsences:["",Validators.required], 
     nomencdesemplois:["",Validators.required], 
     nomencdestatuts:["",Validators.required], 

   });
 }
 
 onAddSite() {
  console.log("cliqué");
   this.submitted=true;
  //  if(this.siteFormGroup?.invalid) return;
   this.sitesService.addSite(this.siteFormGroup?.value)
     .subscribe(data=>{
       alert("Information(s)Enregistrée(s) avec succès");
     });
 }

 onAddSites() {
  console.log("cliqué");
   this.submitted=true;
  //  if(this.siteFormGroup?.invalid) return;
   this.sitesService.addSites(this.siteFormGroup?.value)
     .subscribe(data=>{
       alert("Information(s)Enregistrée(s) avec succès");
     });
 }




}

