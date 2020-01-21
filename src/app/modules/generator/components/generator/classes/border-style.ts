import { BorderStyleInterface } from '../interfaces/border-style-interface';

export class BorderStyle {
  public id: number;
  public name: string;

  constructor(data: BorderStyleInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}
