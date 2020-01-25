/** angular */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** components */
import { PanelBorderComponent } from './panel-border.component';
/** end components */

/** modules */
import { AngularSharedModule } from 'src/app/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/app/shared/modules/angular-material-shared.module';
/** end modules */

/** classes */
import { PanelBorder } from 'src/app/modules/panel-generator/classes/panel-border';
import { PanelBorderStyle } from 'src/app/modules/panel-generator/classes/panel-border-style';
/** end classes */

describe('PanelBorderComponent', () => {
  let component: PanelBorderComponent;
  let fixture: ComponentFixture<PanelBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelBorderComponent],
      imports: [NoopAnimationsModule, AngularSharedModule, AngularMaterialSharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBorderComponent);
    component = fixture.componentInstance;
    component.border = new PanelBorder({
      width: 320,
      color: 'aaaaaa',
      isActive: true,
      style: new PanelBorderStyle({
        id: 1,
        name: 'Solid'
      })
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
