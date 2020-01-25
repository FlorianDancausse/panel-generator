/** angular */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
/** end angular */

/** components */
import { PanelGeneratorComponent } from './panel-generator.component';
import { PanelSizeComponent } from './components/panel-size/panel-size.component';
import { PanelBorderComponent } from './components/panel-border/panel-border.component';
/** end components */

/** modules */
import { AngularSharedModule } from 'src/app/shared/modules/angular-shared.module';
import { AngularMaterialSharedModule } from 'src/app/shared/modules/angular-material-shared.module';
/** end modules */

describe('PanelGeneratorComponent', () => {
  let component: PanelGeneratorComponent;
  let fixture: ComponentFixture<PanelGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelGeneratorComponent, PanelSizeComponent, PanelBorderComponent],
      imports: [NoopAnimationsModule, AngularSharedModule, AngularMaterialSharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
