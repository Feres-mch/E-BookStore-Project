import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PshychologyBooksComponent } from './pshychology-books.component';

describe('PshychologyBooksComponent', () => {
  let component: PshychologyBooksComponent;
  let fixture: ComponentFixture<PshychologyBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PshychologyBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PshychologyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
