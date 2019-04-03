import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp23Component} from './cmp23.component';

describe('Cmp23Component', () => {
  let component: Cmp23Component;
  let fixture: ComponentFixture<Cmp23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp23Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
