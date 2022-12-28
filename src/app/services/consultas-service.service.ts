import { Consulta } from './../models/consulta';
import { first, Observable, map, pipe } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { TitleStrategy } from '@angular/router';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }

}

@Injectable({
  providedIn: 'root'
})
export class ConsultasServiceService {



  constructor(private httpClient: HttpClient) {}



  list(){
    return this.httpClient.get<Consulta[]>('http://localhost:8080/listar');
  }

  save(consulta:any){

    return this.httpClient.post<Consulta>('http://localhost:8080/cadastrar',consulta).pipe(first());

  }

  deleteId(id:number){
    return this.httpClient.delete(`http://localhost:8080/deletar/${id}`).pipe(first())
  }

  findId(id:number){
    return this.httpClient.get<Consulta>(`http://localhost:8080/remarcar/${id}`)

  }
  put(cadastro:any){
    return this.httpClient.put<Consulta>(`http://localhost:8080/remarcar`,cadastro)

  }
}
