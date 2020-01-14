import { Component } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  /**
   * Panel's Width
   */
  panelWitdh: number;
  /**
   * Panel's height
   */
  panelHeight: number;
  /**
   * Used to enable/disable panel's
   */
  isPanelBorder: boolean;
  /**
   * Width used for the panel's border
   */
  panelBorderWidth: number;
  /**
   * Color used for the panel's border
   */
  panelBorderColor: string;
  /**
   * Style used for the panel's border
   */
  panelBorderStyle: string;

  constructor() {
    this.panelWitdh = 320;
    this.panelHeight = 320;
    this.isPanelBorder = true;
    this.panelBorderWidth = 1;
    this.panelBorderColor = 'd6a2ad';
    this.panelBorderStyle = 'solid';
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

  /**
   * Change the border to show or hide
   *
   * @param state true === show the border | false === hide the border
   */
  onIsPanelBorder(state: boolean) {
    this.isPanelBorder = state;
  }

  /**
   * Change the panel's border width
   *
   * @param width new border width for the panel
   */
  onBorderWidthEmitter(width: number) {
    console.log(width);
    this.panelBorderWidth = width;
  }

  /**
   * Change the panel's border color
   *
   * @param color new border color for the panel
   */
  onBorderColorEmitter(color: string) {
    this.panelBorderColor = color;
  }

  /**
   * Change the panel's border style
   *
   * @param style new border style for the panel
   */
  onBorderStyleEmitter(style: string) {
    this.panelBorderStyle = style;
  }
}
