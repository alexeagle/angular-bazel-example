import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp12Component} from './cmp12.component';

describe('Cmp12Component', () => {
  let component: Cmp12Component;
  let fixture: ComponentFixture<Cmp12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp12Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
