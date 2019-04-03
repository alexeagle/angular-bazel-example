import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp17Component} from './cmp17.component';

describe('Cmp17Component', () => {
  let component: Cmp17Component;
  let fixture: ComponentFixture<Cmp17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp17Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
