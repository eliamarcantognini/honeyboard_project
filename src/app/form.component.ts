import { Component } from '@angular/core';

import { Honey } from './honey';
import { HoneyNames } from './honeyNames';

@Component({
  selector: 'info-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  elementType = 'url';
  value = '';
  ranges = HoneyNames;
  remainingText = 100;
  model = new Honey('', '', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.newQrCode();
    // this.sendEmail();
  }

  newQrCode() {
    const token = this.getToken()
    // Fare un pack del json per risparmiare spazio?
    this.value = JSON.stringify({
      c: token, // token di controllo del qrcode
      f: this.model.nomeAzienda,
      s: this.model.sito,
      n: this.model.recapito,
      a: this.model.indirizzo,
      p: this.model.citta,
      C: this.model.cap,
      h: this.model.nomeMiele,
      d: this.model.descMiele
    });
  }

  // sendEmail() {
    // Aggiungere un BaaS per farlo?
  // }

  getKeys(obj: any){
    // var isValueProperty = parseInt(obj, 10) >= 0
    return Object.keys(obj).map(key => obj[key]).filter(value => typeof value === 'number') as string[];
  }

  textChange(value) {
    this.remainingText = 100 - value.length
  }

  getToken() {
    const length = 18
    let pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
    let text = "";
    for (let i = 0; i < length; i++) {
      text += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
      return text;
  }
}
