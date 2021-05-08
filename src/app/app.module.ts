import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxPrintModule } from 'ngx-print';
import { FileSaverModule } from 'ngx-filesaver';
import 'jsonpack';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    NgxPrintModule,
    FileSaverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
