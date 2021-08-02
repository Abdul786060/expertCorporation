import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerSliderComponent } from './ser-slider.component';

describe('SerSliderComponent', () => {
  let component: SerSliderComponent;
  let fixture: ComponentFixture<SerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
