import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoBenefitsComponent } from './iso-benefits.component';

describe('IsoBenefitsComponent', () => {
  let component: IsoBenefitsComponent;
  let fixture: ComponentFixture<IsoBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
