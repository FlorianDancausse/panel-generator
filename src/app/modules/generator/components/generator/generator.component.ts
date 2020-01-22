/** angular */
import { Component } from '@angular/core';
/** end angular */

/** classes */
import { Panel } from './classes/panel';
/** end classes */

/** constants */
import { defaultPanel } from './constants/panel';
/** end constants */

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  /**
   * The current panel
   */
  public panel: Panel = defaultPanel;
}
