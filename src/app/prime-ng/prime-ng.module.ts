import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
  ],
})
export class PrimeNgModule {}
