import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbedListComponent } from './sunbed-list.component';

describe('SunbedListComponent', () => {
  let component: SunbedListComponent;
  let fixture: ComponentFixture<SunbedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunbedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunbedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
