import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {

  titulo = 'Clientes';

  clientes = [
    {nome: 'Jussara'},
    {nome: 'Rafael'},
    {nome: 'Amanda'},
    {nome: 'Edna'},
    {nome: 'Ricardo'},
    {nome: 'Carlos'},
    {nome: 'José'},
    {nome: 'Silvana'},
    {nome: 'Fernanda'},
    {nome: 'Rosana'},
    {nome: 'Bruna'},
  ];

  constructor() {}

  ngOnInit() {}
}
