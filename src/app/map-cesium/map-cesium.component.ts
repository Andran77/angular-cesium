import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Cartesian3 } from 'cesium';
import { MapPositionService } from '../map-position.service'

@Component({
  selector: 'app-map-cesium',
  templateUrl: './map-cesium.component.html',
  styleUrls: ['./map-cesium.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapCesiumComponent implements OnInit {

  @Input() mapActive;
  mapPosition: Cartesian3;

  constructor(
    private mapPositionService: MapPositionService
  ) { }

  ngOnInit(): void {
    this.mapPositionService.mapPositionSubject.subscribe(position => {
      this.mapPosition = position;
    })
  }
}
