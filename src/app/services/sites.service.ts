import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SitesComponent} from '../components/sites/sites.component';
import {Observable} from 'rxjs';
import {Site} from '../modele/site.model';

@Injectable({providedIn: "root"})

export class SitesService{
  

  constructor(private http:HttpClient) {
  }

getAllSites():Observable<Site[]>{
  let host=environment.host;
  return this.http.get<Site[]>(host+"/sites");
}

getSite(id:number):Observable<Site>{
  let host=environment.host;
  return this.http.get<Site>(host+"/site/"+id);
}

addSite(site:Site):Observable<Site>{
  let host=environment.host;
  return this.http.post<Site>(host+"/addSite",site);
}

addSites(site:Site):Observable<Site>{
  let host=environment.host;
  return this.http.post<Site>(host+"/addSites",site);
}


updateSite(site:Site):Observable<Site>{
  let host=environment.host;
  return this.http.put<Site>(host+"/updateSite/",site);
}


searchSites(keyword:string):Observable<Site[]>{
  let host=environment.host;
  return this.http.get<Site[]>(host+"/sites?name_like="+keyword);
}

deleteSite(site:Site):Observable<void>{
  let host=environment.host;
  return this.http.delete<void>(host+"/delete/"+site.id);
}














/* editerSite(site:Site):Observable<Site>{
  let host=environment.host;
  return this.http.put<Site>(host+"/delete/{id}"+site.id,site);
} */



/* getSelectedSites():Observable<Site[]>{
  let host=environment.host;
  return this.http.get<Site[]>(host+"/sites?selected=true");
} */


/* 
delete(site:Site):Observable<void>{
  let host=environment.host;
  return this.http.delete<void>(host+"/deleteSite");
}
 */



}














 /*  public getAllSites():Observable<Site[]>{
    return this.http.get<Site[]>(`${this.host}/sites`);
  }


  public addSites(sites:Site[]):Observable<Site[]>{
    return this.http.post<Site[]>(`${this.host}/addSites`,sites);
  }


  public addSite(site:Site[]):Observable<Site>{
    return this.http.post<Site>(`${this.host}/addSite`,site);
  }



  public updateSite(site:Site):Observable<Site>{
    return this.http.put<Site>(`${this.host}/updateSite`,site);
  }



  public deleteSite(site: number):Observable<Site>{
    return this.http.delete<Site>(`${this.host}/deleteSite`);
  }

  public SearchSite(keyword: string):Observable<Site>{
    return this.http.get<Site>(`${this.host}"/site?name_like="+keyword`);
  } 

}*/
