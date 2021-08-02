import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsostandardComponent } from './isostandard.component';

describe('IsostandardComponent', () => {
  let component: IsostandardComponent;
  let fixture: ComponentFixture<IsostandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsostandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsostandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
