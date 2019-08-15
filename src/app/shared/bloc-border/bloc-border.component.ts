import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bloc-border',
  templateUrl: './bloc-border.component.html',
  styleUrls: ['./bloc-border.component.scss']
})
export class BlocBorderComponent {
  /**
   * State of the border to emit
   */
  @Output() isBorderEmitter = new EventEmitter<boolean>();
  /**
   * Color to emit
   */
  @Output() borderColorEmitter = new EventEmitter<string>();
  /**
   * Style to emit
   */
  @Output() borderStyleEmitter = new EventEmitter<string>();

  /**
   * Used for ngModel, to hide/show the border
   */
  @Input() isBorderModel: boolean;
  /**
   * Used for ngModel, to change the border color
   */
  @Input() borderColorModel: string;
  /**
   * Used for ngModel, to change the border style
   */
  @Input() borderStyleModel: string;

  constructor() {
  }

  /**
   * Emit the new state of border color
   *
   * @param state true === show the border | false === hide the border
   */
  public changeBorderActivation(state: boolean) {
    this.isBorderEmitter.emit(state);
  }

  /**
   * Emit the new border color
   *
   * @param newColor String from an input, this string does not contains the hexa's hashtag
   */
  public changeBorderColor(newColor: string) {
    if (this.isHexa(newColor)) {
      this.borderColorEmitter.emit(newColor);
    }
  }

  /**
   * Emit the new border style
   *
   * @param newStyle Style for the border
   */
  public changeBorderStyle(newStyle: string) {
    console.log(newStyle);
    this.borderStyleEmitter.emit(newStyle);
  }

  /**
   * Check if a string is hexadecimal
   *
   * @param str the string to check
   */
  private isHexa(str: string) {
    const hexRegEx = /([0-9]|[a-f])/gim;
    return typeof str === 'string' && (str.match(hexRegEx) || []).length === str.length;
  }
}
