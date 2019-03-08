import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

 const API_SERVER = 'http://localhost:44376/api/';
@Injectable()
export class BaseService {

  constructor(
    private httpClient: HttpClient
  ) { }
  get(url: string, header?: Object): Observable<any> {
    return this.httpClient.get(`${ API_SERVER + url }`, header);
  }
  post<T>(url: string, object: T){
    return this.httpClient.post(`${ API_SERVER + url }`, object);
  }
  put<T>(url: string, object: T){    
    return this.httpClient.put(`${ API_SERVER + url }`, object);
  }
  delete(url: string, options?: any){
    if(options){
      return this.httpClient.delete(`${ API_SERVER + url }`, options);
    }else{
      return this.httpClient.delete(`${ API_SERVER + url }`);
    }
  }
  patch<T>(url: string, object: T){
    return this.httpClient.patch(`${ API_SERVER + url }`, object);
  }

}
