import { Directive, ElementRef, OnInit } from '@angular/core';
import { Cartesian3, IonImageryProvider, Viewer } from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const viewer = new Viewer(this.el.nativeElement, {
      sceneMode: 2,
      homeButton: false,
      fullscreenButton: false,
      animation: false,
      timeline: false,
      geocoder: false,
      sceneModePicker: false,
      navigationHelpButton: false,
      // baseLayerPicker: false
    });
    viewer.scene.camera.position = new Cartesian3(4200000, 6200000);
    viewer.imageryLayers.addImageryProvider(new IonImageryProvider({ assetId : 4 }));
    viewer.scene.camera.zoomIn(18897000);
  }

}
