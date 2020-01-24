/** classes */
import { PanelBorderStyle } from './panel-border-style';
/** end classes */

interface PanelBorderInterface {
  isActive: boolean;
  width: number;
  color: string;
  style: PanelBorderStyle;
}

export class PanelBorder {
  public isActive: boolean;
  public width: number;
  public color: string;
  public style: PanelBorderStyle;

  constructor(data: PanelBorderInterface) {
    this.isActive = data.isActive;
    this.width = data.width;
    this.color = data.color;
    this.style = data.style;
  }
}
