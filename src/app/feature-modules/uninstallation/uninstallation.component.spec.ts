import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UninstallationComponent } from './uninstallation.component';

describe('UninstallationComponent', () => {
  let component: UninstallationComponent;
  let fixture: ComponentFixture<UninstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UninstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UninstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
