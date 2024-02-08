import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfFirstComponentComponent } from './child-of-first-component.component';

describe('ChildOfFirstComponentComponent', () => {
  let component: ChildOfFirstComponentComponent;
  let fixture: ComponentFixture<ChildOfFirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOfFirstComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
