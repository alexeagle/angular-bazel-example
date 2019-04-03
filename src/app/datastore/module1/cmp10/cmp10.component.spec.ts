import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp10Component} from './cmp10.component';

describe('Cmp10Component', () => {
  let component: Cmp10Component;
  let fixture: ComponentFixture<Cmp10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp10Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
