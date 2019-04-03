import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp13Component} from './cmp13.component';

describe('Cmp13Component', () => {
  let component: Cmp13Component;
  let fixture: ComponentFixture<Cmp13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp13Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
