import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})



export class ClientesComponent implements OnInit {

  clientes: Cliente[]=[
    {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'Juan@unicauca.edu.co', createAt: '2021-05-14'},
    {id: 2, nombre: 'Sebas', apellido: 'Sangez', email: 'san@unicauca.edu.co', createAt: '2022-05-14'}
  ]
  constructor() { }

  ngOnInit(): void {

  }
}
