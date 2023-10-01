import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input()
  title = '';

  @Input()
  btn = 'Agendar clase';

  @Input()
  imgSrc = 'Agendar clase';

  @Output()
  Onclick = new EventEmitter();
}
