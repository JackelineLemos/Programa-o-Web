import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-media-simples',
  templateUrl: './calculadora-media-simples.component.html',
  styleUrls: ['./calculadora-media-simples.component.css']
})
export class CalculadoraMediaSimplesComponent implements OnInit {
  ac1: number;
  ac2: number;
  af: number;
  ag: number;
  resultado: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcular() {
    this.resultado = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45)

  }


}
