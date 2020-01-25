/** angular */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** components */
import { PanelSizeComponent } from './panel-size.component';
/** end components */

/** modules */
import { AngularSharedModule } from 'src/app/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/app/shared/modules/angular-material-shared.module';
/** end modules */

/** classes */
import { Panel } from 'src/app/modules/panel-generator/classes/panel';
import { PanelBorder } from 'src/app/modules/panel-generator/classes/panel-border';
import { PanelBorderStyle } from 'src/app/modules/panel-generator/classes/panel-border-style';
/** end classes */

describe('PanelSizeComponent', () => {
  let component: PanelSizeComponent;
  let fixture: ComponentFixture<PanelSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSizeComponent],
      imports: [NoopAnimationsModule, AngularSharedModule, AngularMaterialSharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSizeComponent);
    component = fixture.componentInstance;
    component.panel = new Panel({
      width: 320,
      height: 320,
      border: new PanelBorder({
        width: 320,
        color: 'aaaaaa',
        isActive: true,
        style: new PanelBorderStyle({
          id: 1,
          name: 'Solid'
        })
      })
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
