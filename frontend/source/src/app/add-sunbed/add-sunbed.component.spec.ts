import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSunbedComponent } from './add-sunbed.component';

describe('AddSunbedComponent', () => {
  let component: AddSunbedComponent;
  let fixture: ComponentFixture<AddSunbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSunbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSunbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
