import { PanelBorder } from './panel-border';
import { PanelInterface } from '../interfaces/panel-interface';
import { defaultPanel } from '../constants/generator';

export class Panel {
  public width: number;
  public height: number;
  public border: PanelBorder;

  constructor(data: PanelInterface) {
    this.width = data.width || defaultPanel.width;
    this.height = data.height || defaultPanel.height;
    this.border = data.border || defaultPanel.border;
  }
}
