import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recrutadores',
  templateUrl: './recrutadores.component.html',
  styleUrls: ['./recrutadores.component.css']
})
export class RecrutadoresComponent implements OnInit {
  
  titulo = 'Recrutadores';

  recrutadores = [
    {nome: 'William'},
    {nome: 'Rafael'},
    {nome: 'Douglas'},
    {nome: 'Gabriel'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
