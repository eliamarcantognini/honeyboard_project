import { Component } from '@angular/core';

import { Honey } from './honey';


@Component({
  selector: 'info-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  elementType = 'url';
  value = '';

  model = new Honey('', '', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.newQrCode();
    // this.sendEmail();
  }

  newQrCode() {
    // Fare un pack del json per risparmiare spazio?
    this.value = JSON.stringify({
      c: 'h', // carattere di controllo del qrcode
      fN: this.model.nomeAzienda,
      s: this.model.sito,
      n: this.model.recapito,
      a: this.model.indirizzo,
      ci: this.model.citta,
      ca: this.model.cap,
      na: this.model.nomeMiele,
      d: this.model.descMiele
    });
  }

  // sendEmail() {
    // Aggiungere un BaaS per farlo?
  // }
}
