import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSizeComponent } from './panel-size.component';

describe('PanelSizeComponent', () => {
  let component: PanelSizeComponent;
  let fixture: ComponentFixture<PanelSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSizeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
