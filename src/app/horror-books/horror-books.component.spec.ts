import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorBooksComponent } from './horror-books.component';

describe('HorrorBooksComponent', () => {
  let component: HorrorBooksComponent;
  let fixture: ComponentFixture<HorrorBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
