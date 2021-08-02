import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoSerComponent } from './iso-ser.component';

describe('IsoSerComponent', () => {
  let component: IsoSerComponent;
  let fixture: ComponentFixture<IsoSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
