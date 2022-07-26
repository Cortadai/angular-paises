import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiBaseURL: string = "https://restcountries.com/v2";

  get getHttpParams(){
    return new HttpParams().set("fields","name,capital,alpha2Code,flag,population");
  }

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiBaseURL}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.getHttpParams});
  }

  buscarPaisPorCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiBaseURL}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params: this.getHttpParams});
  }

  buscarPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiBaseURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  
  buscarPaisesPorRegion(region:string):Observable<Country[]>{
    const url = `${this.apiBaseURL}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.getHttpParams});
  }

}
