/** angular */
import { Component, Input } from '@angular/core';
/** end angular */

/** classes */
import { Panel } from '../../classes/panel';
/** end classes */

@Component({
  selector: 'app-bloc-size',
  templateUrl: './bloc-size.component.html',
  styleUrls: ['./bloc-size.component.scss']
})
export class BlocSizeComponent {
  /**
   * The current panel
   */
  @Input() panel: Panel;
}
