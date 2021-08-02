import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingClientsComponent } from './amazing-clients.component';

describe('AmazingClientsComponent', () => {
  let component: AmazingClientsComponent;
  let fixture: ComponentFixture<AmazingClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
