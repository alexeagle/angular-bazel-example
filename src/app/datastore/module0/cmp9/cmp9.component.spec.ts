import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp9Component} from './cmp9.component';

describe('Cmp9Component', () => {
  let component: Cmp9Component;
  let fixture: ComponentFixture<Cmp9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp9Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
