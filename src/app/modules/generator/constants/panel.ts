/** classes */
import { Panel } from '../classes/panel';
import { PanelBorder } from '../classes/panel-border';
import { PanelBorderStyle } from '../classes/panel-border-style';
/** end classes */

/**
 * Instances of usable border styles
 */
export const defaultPanelBorderStyles: PanelBorderStyle[] = [
  new PanelBorderStyle({
    id: 1,
    name: 'Solid'
  }),
  new PanelBorderStyle({
    id: 2,
    name: 'Dashed'
  }),
  new PanelBorderStyle({
    id: 3,
    name: 'Dotted'
  }),
  new PanelBorderStyle({
    id: 4,
    name: 'Double'
  }),
  new PanelBorderStyle({
    id: 5,
    name: 'Groove'
  }),
  new PanelBorderStyle({
    id: 6,
    name: 'Outset'
  }),
  new PanelBorderStyle({
    id: 7,
    name: 'Ridge'
  }),
  new PanelBorderStyle({
    id: 8,
    name: 'Hidden'
  })
];
