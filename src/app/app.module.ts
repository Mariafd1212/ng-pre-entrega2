import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModoNocturnoComponent } from './modo-nocturno/modo-nocturno.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ModoNocturnoComponent,
    FooterComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
