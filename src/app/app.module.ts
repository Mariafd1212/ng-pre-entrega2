import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModoNocturnoComponent } from './modo-nocturno/modo-nocturno.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';
import { ToggleListDirective } from './directives/toggle-list.directive';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ModoNocturnoComponent,
    FooterComponent,
    ListaComponent,
    ToggleListDirective,
    RoundedBlockDirective,
    CardsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
