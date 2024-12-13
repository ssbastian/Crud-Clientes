import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})

export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear cliente';

  
 constructor(private clienteService: ClienteService, private router : Router) { }

  ngOnInit(): void {}

 /*  crearCliente(): void {
    console.log('invocando al metodo crar cliente');
    console.log(this.cliente);
  } */

  crearCliente(): void {
    console.log('invocando al metodo crar cliente');
    console.log(this.cliente);
  
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }
  
}



/* constructor(private clienteService: ClienteService, private router:Router) { } */



