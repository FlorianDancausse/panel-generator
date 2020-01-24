import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocSizeComponent } from './bloc-size.component';

describe('BlocSizeComponent', () => {
  let component: BlocSizeComponent;
  let fixture: ComponentFixture<BlocSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlocSizeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
