import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleList]',
})
export class ToggleListDirective {
  constructor(public el: ElementRef, public renderer: Renderer2) {
    this.desplegarLista();
  }

  desplegarLista() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }

  reducirLista() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }

  toggleLista() {
    let estiloActual = this.el.nativeElement.style.display;
    if (estiloActual === 'none') {
      this.desplegarLista();
    } else {
      this.reducirLista();
    }
  }
}
