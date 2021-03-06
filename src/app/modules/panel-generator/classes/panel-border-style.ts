interface PanelBorderStyleInterface {
  id: number;
  name: string;
}

export class PanelBorderStyle {
  public id: number;
  public name: string;

  constructor(data: PanelBorderStyleInterface) {
    this.id = data.id;
    this.name = data.name;
  }
}
