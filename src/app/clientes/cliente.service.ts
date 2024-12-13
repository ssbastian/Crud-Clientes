//Uso este servicio para desacoplar la logica de obtener clientes de Clientes.ts
import { Injectable } from '@angular/core';
//decorador injectable para crear automaticamente un objeto de la clase
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { Observable, of } from 'rxjs'; // patron observador 

//import para que consuma el API REST
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8085/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}); //indicarle al servidor qeu nos deve devolfer un json


  constructor(private http: HttpClient) {}

/*   getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  } */

    getClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.urlEndPoint);
    }

    
    create(cliente: Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>(this.urlEndPoint,cliente, {headers: this.httpHeaders})
    }



}
