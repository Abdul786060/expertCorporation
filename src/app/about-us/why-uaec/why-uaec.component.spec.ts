import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUAECComponent } from './why-uaec.component';

describe('WhyUAECComponent', () => {
  let component: WhyUAECComponent;
  let fixture: ComponentFixture<WhyUAECComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyUAECComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUAECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
