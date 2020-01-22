/** classes */
import { PanelBorder } from '../classes/panel-border';
/** end classes */

/** constants */
import { defaultPanelBorderStyles } from './panel-border-style';
/** end constants */

export const defaultPanelBorder: PanelBorder = new PanelBorder({
  isActive: true,
  width: 8,
  color: 'd6a2ad',
  style: { ...defaultPanelBorderStyles[0] }
});
