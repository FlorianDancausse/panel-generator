import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBorderComponent } from './panel-border.component';

describe('PanelBorderComponent', () => {
  let component: PanelBorderComponent;
  let fixture: ComponentFixture<PanelBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelBorderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
