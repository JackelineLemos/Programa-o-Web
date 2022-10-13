import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  num1: any = 0;
  cursos : any = [];
  numeros : number [] = [1,2,3,4,5];
  teste = "teste"
  constructor() { }

  ngOnInit(): void { 
    let teste: string = "";
    this.num1 = 'teste';
    this.cursos.push("Curso");
    this.cursos.push(1);
    this.numeros.push(1);
    console.log(this.numeros);
    this.cursos.push({nome: "Curso"});

  }

}
