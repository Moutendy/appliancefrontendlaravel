import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  readonly APIUrl = environment.APIUrl +'appliance';
  constructor(private http: HttpClient) { }

  getALLAppliance():Observable<any>
  {
    return this.http.get(this.APIUrl);
  }

  saveAppliance(appliance:any):Observable<any>
  {
    return this.http.post(this.APIUrl,appliance);
  }
  updateAppliance(appliance:any,idappliance:number):Observable<any>
  {
    return this.http.put(this.APIUrl+idappliance,appliance);
  }

  deleteAppliance(idappliance:number)
  {
    return this.http.delete(this.APIUrl+idappliance);
  }

  getOneAppliance(idappliance:number):Observable<any>
  {
return this.http.get(this.APIUrl+idappliance);
  }

}
