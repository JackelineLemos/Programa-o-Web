import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  @Input() num1: number;
  @Output() num1Change = new EventEmitter<number>;
  inativo: boolean = false;
  estiloBotao: String = "btn btn-primary";
  constructor() { }

  ngOnInit(): void {
  }

  mudarValorNum1(){
    this.num1 = this.num1 * 2;
  }
}
