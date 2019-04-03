import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp39Component} from './cmp39.component';

describe('Cmp39Component', () => {
  let component: Cmp39Component;
  let fixture: ComponentFixture<Cmp39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp39Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
