import { Directive, ElementRef, OnInit } from '@angular/core';
import { Viewer } from 'cesium';

@Directive({
  selector: '[mapCesium]'
})
export class MapCesiumDirective implements OnInit  {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewer = new Viewer(this.el.nativeElement);
  }
}
