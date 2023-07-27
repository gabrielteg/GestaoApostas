import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recrutadores',
  templateUrl: './recrutadores.component.html',
  styleUrls: ['./recrutadores.component.css']
})
export class RecrutadoresComponent implements OnInit {
  
  titulo = 'Recrutadores';

  recrutadores = [
    { id: 1, nome: 'William', sobrenome: 'Silva', email: 'jussaralu.sou@gmail.com'},
    { id: 2, nome: 'Rafael', sobrenome: 'Oliveira', email: 'rbet9614@gmail.com'},
    { id: 3, nome: 'Douglas', sobrenome: 'Pinheiro', email: 'douglas.pinhbet4@gmail.com'},
    { id: 4, nome: 'Gabriel', sobrenome: 'Alves', email: 'gabrielr.profissional@gmail.com'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
