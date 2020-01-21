import { PanelBorderInterface } from '../interfaces/panel-border-interface';
import { defaultPanel } from '../constants/generator';

export class PanelBorder {
  public isActive: boolean;
  public width: number;
  public color: string;
  public styleId: number;

  constructor(data: PanelBorderInterface) {
    this.isActive = data.isActive || defaultPanel.border.isActive;
    this.width = data.width || defaultPanel.border.width;
    this.color = data.color || defaultPanel.border.color;
    this.styleId = data.styleId || defaultPanel.border.styleId;
  }
}
