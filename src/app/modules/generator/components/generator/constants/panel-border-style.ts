/** classes */
import { PanelBorderStyle } from '../classes/panel-border-style';
/** classes */

/** Usable border styles */
const borderStyles = ['Solid', 'Dashed', 'Dotted', 'Double', 'Groove', 'Outset', 'Ridge', 'Hidden'];
/**
 * Instances of usable border styles
 */
export const defaultPanelBorderStyles: PanelBorderStyle[] = borderStyles.map((name: string, index: number) => {
  return new PanelBorderStyle({ id: index + 1, name });
});
