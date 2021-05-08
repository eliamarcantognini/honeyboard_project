import { Component } from '@angular/core';

import { Miele } from '../app/miele';


@Component({
  selector: 'info-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  elementType = 'url';
  value = '';

  model = new Miele('', '', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.newQrCode();
    // this.sendEmail();
  }

  newQrCode() {
    // Fare un pack del json per risparmiare spazio?
    this.value = JSON.stringify({
      c: 'hb', // carattere di controllo del qrcode
      azienda: this.model.nomeAzienda,
      sito: this.model.sito,
      recapito: this.model.recapito,
      indirizzo: this.model.indirizzo,
      citta: this.model.citta,
      cap: this.model.cap,
      miele: this.model.nomeMiele,
      desc: this.model.descMiele
    });
  }

  // sendEmail() {
    // Aggiungere un BaaS per farlo?
  // }
}
