import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iso45001Component } from './iso45001.component';

describe('Iso45001Component', () => {
  let component: Iso45001Component;
  let fixture: ComponentFixture<Iso45001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iso45001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iso45001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
