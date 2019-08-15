import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Panel's Width
   */
  panelWitdh: number;
  /**
   * Panel's height
   */
  panelHeight: number;
  /**
   * Used for enable/disable panel's
   */
  isBorderEnable: boolean;
  /**
   * Color used for the panel's border
   */
  panelBorderColor: string;

  constructor() {
    this.panelWitdh = 320;
    this.panelHeight = 320;
    this.isBorderEnable = true;
    this.panelBorderColor = 'd6a2ad';
  }

  /**
   * Change the panel's width
   *
   * @param width new width for the panel
   */
  onWidthEmitter(width: number) {
    this.panelWitdh = width;
  }

  /**
   * Change the panel's height
   *
   * @param height new height for the panel
   */
  onHeightEmitter(height: number) {
    this.panelHeight = height;
  }
}
