/** angular */
import { Component, Input } from '@angular/core';
/** end angular */

/** classes */
import { PanelBorder } from '../../../../classes/panel-border';
import { PanelBorderStyle } from '../../../../classes/panel-border-style';
/** end classes */

/** constants */
import { defaultPanelBorderStyles } from '../../../../constants/panel';
/** end constants */

@Component({
  selector: 'app-panel-border',
  templateUrl: './panel-border.component.html',
  styleUrls: ['./panel-border.component.scss']
})
export class PanelBorderComponent {
  /**
   * Values of the border
   */
  private _border: PanelBorder;
  @Input()
  public set border(border: PanelBorder) {
    this._border = border;
  }
  public get border(): PanelBorder {
    return this._border;
  }

  /**
   * The usable border styles
   */
  public usableBorderStyles: PanelBorderStyle[] = [...defaultPanelBorderStyles];

  public onChangeBorderStyle(styleId: number) {
    this.border.style = { ...this.usableBorderStyles.find(style => style.id === styleId) };
  }

  /**
   * Check if a string is hexadecimal
   *
   * @param str the string to check
   */
  private isHexa(str: string) {
    const hexRegEx = /([0-9]|[a-f])/gim;
    return typeof str === 'string' && (str.match(hexRegEx) || []).length === str.length;
  }
}
