import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbedsComponent } from './sunbeds.component';

describe('SunbedsComponent', () => {
  let component: SunbedsComponent;
  let fixture: ComponentFixture<SunbedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunbedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
