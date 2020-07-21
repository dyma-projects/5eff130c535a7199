import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import { stringify } from 'querystring';

@Directive({ selector: '[color]' })
  export class ColorDirective {
    public toucheClavier: string;
    @HostBinding('style.backgroundColor') couleurEnvoyer: string;
    @Input ('color') couleur: string;
    @HostListener('window:keydown', ['$event']) clavier($event){

      this.toucheClavier = $event.key;

      if (this.toucheClavier === 'ArrowDown') {
        this.couleurEnvoyer = 'red';
      } else if (this.toucheClavier === 'ArrowUp') {
        this.couleurEnvoyer = 'green';
      } else if (this.toucheClavier === 'ArrowRight') {
        this.couleurEnvoyer = 'tomato';
      } else if (this.toucheClavier === 'ArrowLeft') {
        this.couleurEnvoyer = 'aqua';
      }

      }



    constructor() { }
  }
