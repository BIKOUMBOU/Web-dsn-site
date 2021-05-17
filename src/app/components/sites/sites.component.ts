import { Component, OnInit } from '@angular/core';
import { SitesService } from '../../services/sites.service';
import { Site} from '../../modele/site.model';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppDataState, DataStateEnum } from 'src/app/State/site.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
})
  export class SitesComponent implements OnInit {
  sites$:Observable<AppDataState<Site[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;

/*   keyword: any;
  p: number =1; */

  constructor(private sitesService:SitesService, private router:Router) {}

  ngOnInit(): void {

  }
    

  GetAllSites() {
    // console.log("start...")

    /* pipe est un operateur comme subscribtion. on fait appel  à la méthode getAllSites() et dès que les données arrive, 
    on fait pipe pour recevoir les données en utilisant l'objet map */

    this.sites$= this.sitesService.getAllSites().pipe(
    map(data =>{
      // console.log(data);
      return ({dataState:DataStateEnum.LOADED, data:data}) //on récupère la donnée de type liste site (dataState indique juste l'état de l'information qu'on attend)   
    }),
    
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessaeg: err.message}))
    );
  }

  
 /*  onGetSelectedSites() {
    this.sites$= this.sitesService.getSelectedSites().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  } */

  
  SearchSites(dataForm: any){
    this.sites$= this.sitesService.searchSites(dataForm.keyword).pipe(
      map(data =>{
        // console.log(data);
        return ({dataState:DataStateEnum.LOADED, data:data}) //on récupère la donnée de type liste site (dataState indique juste l'état de l'information qu'on attend)   
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessaeg: err.message}))
      );
  }


  DeleteSite(s: Site){
    console.log("cliqué");
    let conf = confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement ?"); 
    if (conf==true) 
    this.sitesService.deleteSite(s)
    .subscribe(data=>{
      this.GetAllSites();
    })
}

  NewSite(){
    this.router.navigateByUrl("/newSite")
  }

  UpdateSite(){
    this.router.navigateByUrl("/UpdateSite")
  }

  Edit(s: Site) {
    this.router.navigateByUrl("/editSite/"+s.id);
  }

  







/*   key: string ='id';
  reverse: boolean = false;
  sort(key){
    this.key = key
    this.reverse = !this.reverse;
  } */


}


