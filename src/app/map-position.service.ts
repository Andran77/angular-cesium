import { Injectable } from '@angular/core';
import { Cartesian3 } from 'cesium';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapPositionService {

  mapPosition: Cartesian3 = Cartesian3.fromElements(3643853.290676716, 2957419.3890690533, 6569347.5102786925);
  mapPositionSubject = new Subject<Cartesian3>();

  constructor() {
    this.mapPositionSubject.next(this.mapPosition);
  }

  getPosition() {
    return this.mapPosition;
  }

  setPosition(newPosition: Cartesian3) {
    this.mapPosition = newPosition;
    this.mapPositionSubject.next(newPosition);
  }
}
