/** angular */
import { Component } from '@angular/core';
/** end angular */

/** classes */
import { Panel } from '../../classes/panel';
import { PanelBorder } from '../../classes/panel-border';
import { PanelBorderStyle } from '../../classes/panel-border-style';
/** end classes */

/** constants */
import { defaultPanelBorderStyles } from '../../constants/panel';
/** end constants */

@Component({
  templateUrl: './panel-generator.component.html',
  styleUrls: ['./panel-generator.component.scss']
})
export class PanelGeneratorComponent {
  /**
   * The current panel
   */
  public panel: Panel = new Panel({
    width: 320,
    height: 320,
    border: new PanelBorder({
      isActive: true,
      width: 8,
      color: 'd6a2ad',
      style: new PanelBorderStyle({ ...defaultPanelBorderStyles[0] })
    })
  });
}
