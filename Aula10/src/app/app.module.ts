import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { MenuTopoComponent } from './compartilhado/menu-topo/menu-topo.component';
import { RodapeComponent } from './compartilhado/rodape/rodape.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraMediaSimplesComponent } from './calculadora-media-simples/calculadora-media-simples.component';
import { PageNotFoundComponent } from './compartilhado/page-not-found/page-not-found.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    MenuTopoComponent,
    RodapeComponent,
    CalculadoraComponent,
    CalculadoraMediaSimplesComponent,
    PageNotFoundComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
