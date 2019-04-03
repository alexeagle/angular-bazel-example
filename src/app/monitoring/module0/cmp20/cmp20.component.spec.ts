import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp20Component} from './cmp20.component';

describe('Cmp20Component', () => {
  let component: Cmp20Component;
  let fixture: ComponentFixture<Cmp20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp20Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
