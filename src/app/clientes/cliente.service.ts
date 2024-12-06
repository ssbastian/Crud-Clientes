//Uso este servicio para desacoplar la logica de obtener clientes de Clientes.ts
import { Injectable } from '@angular/core';
//decorador injectable para crear automaticamente un objeto de la clase
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { Observable, of } from 'rxjs'; // patron observador 

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
    
  }
}
