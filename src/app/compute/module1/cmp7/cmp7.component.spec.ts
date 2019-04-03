import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp7Component} from './cmp7.component';

describe('Cmp7Component', () => {
  let component: Cmp7Component;
  let fixture: ComponentFixture<Cmp7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp7Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
