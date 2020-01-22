/** classes */
import { Panel } from '../classes/panel';
import { PanelBorder } from '../classes/panel-border';
/** end classes */

/** constants */
import { defaultPanelBorder } from './panel-border';
/** end constants */

/**
 * The default panel
 */
export const defaultPanel: Panel = new Panel({
  width: 320,
  height: 320,
  border: { ...defaultPanelBorder }
});
