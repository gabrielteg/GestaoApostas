import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {

  titulo = 'Clientes';
  clienteSelecionado= '';

  clientes = [
    { id: 1, nome: 'Jussara', sobrenome: 'Oliveira', email: 'jussaralu.sou@gmail.com'},
    { id: 2, nome: 'Rafael', sobrenome: 'Alves', email: 'rbet9614@gmail.com'},
    { id: 3, nome: 'Amanda', sobrenome: 'Silva', email: 'amandaruizss01@gmail.com'},
    { id: 4, nome: 'Edna', sobrenome: 'Maria', email: 'baptistaedna516@gmail.com'},
    { id: 5, nome: 'Ricardo', sobrenome: 'Jose', email: 'rbet55687@gmail.com'},
    { id: 6, nome: 'Carlos', sobrenome: 'Sampaio', email: 'carlosalber392@gmail.com'},
    { id: 7, nome: 'José', sobrenome: 'Ruggar', email: 'joseival628@gmail.com'},
    { id: 8, nome: 'Silvana', sobrenome: 'Silva', email: 'silv.bet989@gmail.com'},
    { id: 9, nome: 'Fernanda', sobrenome: 'Rodrigues', email: 'fernanda.be4548@gmail.com'},
    { id: 10, nome: 'Rosana', sobrenome: 'Silveira', email: 'rsruizbet44@gmail.com'},
    { id: 11, nome: 'Bruna', sobrenome: 'Rodrigues', email: 'brusoaresbetof@gmail.com'},
  ];

  clienteSelect(cliente: any){
    this.clienteSelecionado = cliente.nome;
  }

  voltar(){
    this.clienteSelecionado = '';
  }

  constructor() {}

  ngOnInit() {}
}
