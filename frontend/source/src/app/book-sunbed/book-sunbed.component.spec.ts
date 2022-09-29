import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSunbedComponent } from './book-sunbed.component';

describe('BookSunbedComponent', () => {
  let component: BookSunbedComponent;
  let fixture: ComponentFixture<BookSunbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSunbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSunbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
