/** angular */
import { Component, Input } from '@angular/core';
/** end angular */

/** classes */
import { Panel } from '../../../../classes/panel';
/** end classes */

@Component({
  selector: 'app-panel-size',
  templateUrl: './panel-size.component.html',
  styleUrls: ['./panel-size.component.scss']
})
export class PanelSizeComponent {
  /**
   * The current panel
   */
  private _panel: Panel;
  @Input()
  public set panel(panel: Panel) {
    this._panel = panel;
  }
  public get panel(): Panel {
    return this._panel;
  }
}
