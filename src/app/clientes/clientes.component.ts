import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})



export class ClientesComponent implements OnInit {
  //no lo uso
/*   cls: Cliente[]=[
    {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'Juan@unicauca.edu.co', createAt: '2021-05-14'},
    {id: 2, nombre: 'Sebas', apellido: 'Sangez', email: 'san@unicauca.edu.co', createAt: '2022-05-14'}
  ] */
  
  clientes: Cliente[] = [];

  constructor(private objClienteService: ClienteService) {  }
    
  ngOnInit(): void {

    this.objClienteService.getClientes().subscribe
    (
      clientes => this.clientes = clientes
    );
    
  }
}