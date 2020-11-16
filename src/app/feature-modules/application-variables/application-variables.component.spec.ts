import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationVariablesComponent } from './application-variables.component';

describe('ApplicationVariablesComponent', () => {
  let component: ApplicationVariablesComponent;
  let fixture: ComponentFixture<ApplicationVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
