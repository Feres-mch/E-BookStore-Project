import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDAccueilComponent } from './page-d-accueil.component';

describe('PageDAccueilComponent', () => {
  let component: PageDAccueilComponent;
  let fixture: ComponentFixture<PageDAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
