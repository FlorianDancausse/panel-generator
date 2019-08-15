import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bloc-size',
  templateUrl: './bloc-size.component.html',
  styleUrls: ['./bloc-size.component.scss']
})
export class BlocSizeComponent {
  /**
   * New width to emit
   */
  @Output() widthEmitter = new EventEmitter<number>();
  /**
   * New height to emit
   */
  @Output() heightEmitter = new EventEmitter<number>();

  /**
   * Width value use for ngModel
   */
  @Input() widthModel: number;
  /**
   * Height value use for ngModel
   */
  @Input() heightModel: number;

  constructor() {}

  /**
   * Emit the new width on change
   *
   * @param newWidth Width input value
   */
  onChangeWidth(newWidth: number) {
    this.widthEmitter.emit(newWidth);
  }

  /**
   * Emit the new height on change
   *
   * @param newHeight Height input value
   */
  onChangeHeight(newHeight: number) {
    this.heightEmitter.emit(newHeight);
  }
}
