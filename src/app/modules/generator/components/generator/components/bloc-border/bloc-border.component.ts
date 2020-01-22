/** angular */
import { Component, Input } from '@angular/core';
/** end angular */

/** classes */
import { PanelBorder } from '../../classes/panel-border';
import { PanelBorderStyle } from '../../classes/panel-border-style';
/** end classes */

/** constants */
import { defaultPanelBorderStyles } from '../../constants/panel-border-style';
/** end constants */

@Component({
  selector: 'app-bloc-border',
  templateUrl: './bloc-border.component.html',
  styleUrls: ['./bloc-border.component.scss']
})
export class BlocBorderComponent {
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
  public usableBorderStyles: PanelBorderStyle[] = defaultPanelBorderStyles;

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
