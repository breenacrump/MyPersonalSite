import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileWidthCheckService {

  constructor() { }

  public isMobileWidth(): boolean {
    return this.isWidthLessThan(720);
  }

  public isOnDevice(): boolean {
    return navigator.userAgent.indexOf('Mobile') > -1;
  }

  public isWidthLessThan(width: number): boolean {
    const windowWidth = this.currentWidth();
    return windowWidth < width;
  }

  public currentWidth(): number {
    return (!window.outerWidth || window.screen.width < window.outerWidth) ?
      window.screen.width : window.outerWidth;
  }
}
