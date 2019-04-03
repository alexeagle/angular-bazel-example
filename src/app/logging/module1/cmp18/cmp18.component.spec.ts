import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp18Component} from './cmp18.component';

describe('Cmp18Component', () => {
  let component: Cmp18Component;
  let fixture: ComponentFixture<Cmp18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp18Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
