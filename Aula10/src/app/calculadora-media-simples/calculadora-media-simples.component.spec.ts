import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraMediaSimplesComponent } from './calculadora-media-simples.component';

describe('CalculadoraMediaSimplesComponent', () => {
  let component: CalculadoraMediaSimplesComponent;
  let fixture: ComponentFixture<CalculadoraMediaSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraMediaSimplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraMediaSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
