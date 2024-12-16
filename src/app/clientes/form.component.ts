import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear cliente';
  public errores: string[] = [];
  


  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  /*  crearCliente(): void {
    console.log('invocando al metodo crar cliente');
    console.log(this.cliente);
  } */

  public crearCliente(): void {
    this.clienteService.create(this.cliente).subscribe((respose) => {
      this.router.navigate(['/clientes']);
      swal.fire('Nuevo cliente',`Cliente ${respose.nombre} creado con éxito!`,'success' );
    },
    err => {
      this.errores = err.error.errors as string [];
      console.error('codigo del error desde el backend: ' + err.status);
      console.log(this.errores);
      console.error(err.error.errors);
    }
  
  );
  }
}

/* constructor(private clienteService: ClienteService, private router:Router) { } */
