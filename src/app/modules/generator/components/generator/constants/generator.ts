import { Panel } from '../classes/panel';
import { PanelBorder } from '../classes/panel-border';
import { BorderStyle } from '../classes/border-style';

/**
 * The default panel
 */
export const defaultPanel: Panel = new Panel({
  width: 320,
  height: 320,
  border: new PanelBorder({
    isActive: true,
    width: 8,
    color: 'd6a2ad',
    styleId: 1
  })
});

/** Usable border styles */
const borderStyles = ['Solid', 'Dashed', 'Dotted', 'Double', 'Groove', 'Outset', 'Ridge', 'Hidden'];
/**
 * Instances of usable border styles
 */
export const defaultBorderStyles: BorderStyle[] = borderStyles.map((name: string, index: number) => {
  return new BorderStyle({ id: index + 1, name });
});
