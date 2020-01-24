import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocBorderComponent } from './bloc-border.component';

describe('BlocBorderComponent', () => {
  let component: BlocBorderComponent;
  let fixture: ComponentFixture<BlocBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlocBorderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
