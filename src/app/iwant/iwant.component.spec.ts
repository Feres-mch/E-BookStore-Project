import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IWantComponent } from './iwant.component';

describe('IWantComponent', () => {
  let component: IWantComponent;
  let fixture: ComponentFixture<IWantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
