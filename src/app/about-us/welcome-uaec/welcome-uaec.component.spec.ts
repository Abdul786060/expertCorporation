import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeUAECComponent } from './welcome-uaec.component';

describe('WelcomeUAECComponent', () => {
  let component: WelcomeUAECComponent;
  let fixture: ComponentFixture<WelcomeUAECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeUAECComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeUAECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
