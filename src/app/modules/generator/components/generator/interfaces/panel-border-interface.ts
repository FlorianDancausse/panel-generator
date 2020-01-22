/** classes */
import { PanelBorderStyle } from '../classes/panel-border-style';
/** end classes */

export interface PanelBorderInterface {
  isActive: boolean;
  width: number;
  color: string;
  style: PanelBorderStyle;
}
