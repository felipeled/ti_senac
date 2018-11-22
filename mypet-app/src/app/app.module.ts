import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponente } from './componentes/header/header.componente';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mainComponente } from './componentes/main/main.componente';
import { footerComponente } from './componentes/footer/footer.componente';
import { desafio } from './desafio/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponente,
    mainComponente,
    footerComponente,
    desafio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
