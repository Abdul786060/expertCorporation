import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingIsoCertificateComponent } from './leading-iso-certificate.component';

describe('LeadingIsoCertificateComponent', () => {
  let component: LeadingIsoCertificateComponent;
  let fixture: ComponentFixture<LeadingIsoCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadingIsoCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingIsoCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
