import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IHaveComponent } from './ihave.component';

describe('IHaveComponent', () => {
  let component: IHaveComponent;
  let fixture: ComponentFixture<IHaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IHaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IHaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
