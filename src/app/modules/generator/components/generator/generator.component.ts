import { Component } from '@angular/core';
import {
  panelWitdh,
  panelHeight,
  hasPanelBorder,
  panelBorderSize,
  panelBorderColor,
  panelBorderStyle
} from './constants/generator';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  /**
   * Panel's Width
   */
  public panelWitdh = panelWitdh;
  /**
   * Panel's height
   */
  public panelHeight = panelHeight;
  /**
   * Used to enable/disable panel's
   */
  public isPanelBorder = hasPanelBorder;
  /**
   * Width used for the panel's border
   */
  public panelBorderWidth = panelBorderSize;
  /**
   * Color used for the panel's border
   */
  public panelBorderColor = panelBorderColor;
  /**
   * Style used for the panel's border
   */
  public panelBorderStyle = panelBorderStyle;

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
