import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp15Component} from './cmp15.component';

describe('Cmp15Component', () => {
  let component: Cmp15Component;
  let fixture: ComponentFixture<Cmp15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp15Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
