import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ShowOverlayService {

  private showOverlay = new BehaviorSubject<boolean>(false);
  currentShowOverlay = this.showOverlay.asObservable();

  changeOverlay(overlay: boolean) {
    this.showOverlay.next(overlay);
  }

constructor() { }

}
