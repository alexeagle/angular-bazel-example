import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp36Component} from './cmp36.component';

describe('Cmp36Component', () => {
  let component: Cmp36Component;
  let fixture: ComponentFixture<Cmp36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp36Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
