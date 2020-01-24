/** classes */
import { PanelBorder } from './panel-border';
/** end classes */

interface PanelInterface {
  width: number;
  height: number;
  border: PanelBorder;
}

export class Panel {
  public width: number;
  public height: number;
  public border: PanelBorder;

  constructor(data: PanelInterface) {
    this.width = data.width;
    this.height = data.height;
    this.border = data.border;
  }
}
