import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit{

  listaProdutos : any[] = [
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1},
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2},
    {nome: 'Curso de Ionic Avançado', precoProduto: 50, validade: '2021-12-31', id: 3},


  ];
  constructor() {

  }

  ngOnInit(): void {

  }
}
