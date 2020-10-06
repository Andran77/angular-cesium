import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cartesian3, IonImageryProvider, Viewer, Cartographic } from 'cesium';
import { MapPositionService } from './map-position.service'
@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit, OnChanges {
  @Input() mapPosition: Cartesian3;
  @Input() mapActive;

  viewer;

  constructor(
    private el: ElementRef,
    private mapPositionService: MapPositionService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.handleValueChange(changes);
  }

  ngOnInit(): void {
    this.viewer = new Viewer(this.el.nativeElement, {
      sceneMode: 2,
      homeButton: false,
      fullscreenButton: false,
      animation: false,
      timeline: false,
      geocoder: false,
      sceneModePicker: false,
      navigationHelpButton: false,
    });
    this.viewer.camera.flyTo({
      destination: Cartesian3.fromElements(3643853.290676716, 2957419.3890690533, 6569347.5102786925)
    });
    this.viewer.imageryLayers.addImageryProvider(new IonImageryProvider({ assetId : 4 }));
    this.viewer.camera.changed.addEventListener(() => {
      const newPosition = Cartographic.toCartesian(this.viewer.camera.positionCartographic)
      if (this.mapActive) {
        this.mapPositionService.setPosition(newPosition);
      }
    })
  }

  handleValueChange(changes) {
    if (!this.mapActive && changes.mapPosition && changes.mapPosition.currentValue) {
      this.viewer?.camera.flyTo({
        destination: Cartesian3.fromElements(
          changes.mapPosition.currentValue.x,
          changes.mapPosition.currentValue.y,
          changes.mapPosition.currentValue.z
        )
      });
    }
  }
}
