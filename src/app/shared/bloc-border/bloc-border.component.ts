import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc-border',
  templateUrl: './bloc-border.component.html',
  styleUrls: ['./bloc-border.component.scss']
})
export class BlocBorderComponent {
  /** Used for enable/disable panel's */
  @Input() isBorderEnable: boolean;
  /** Color used for the panel's border */
  @Input() borderColor: string;

  constructor() {
  }

  public changeBorderColor(event: any) {
    const value: string = event.target.value;
    this.borderColor = value;
  }
}
