import { PanelBorderInterface } from '../interfaces/panel-border-interface';
import { defaultPanel } from '../constants/generator';

export class PanelBorder {
  public isActive: boolean;
  public width: number;
  public color: string;
  public style: string;

  constructor(data: PanelBorderInterface) {
    this.isActive = data.isActive || defaultPanel.border.isActive;
    this.width = data.width || defaultPanel.border.width;
    this.color = data.color || defaultPanel.border.color;
    this.style = data.style || defaultPanel.border.style;
  }
}
