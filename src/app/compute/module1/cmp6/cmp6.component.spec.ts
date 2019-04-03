import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp6Component} from './cmp6.component';

describe('Cmp6Component', () => {
  let component: Cmp6Component;
  let fixture: ComponentFixture<Cmp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp6Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
