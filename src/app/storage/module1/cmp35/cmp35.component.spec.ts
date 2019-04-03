import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp35Component} from './cmp35.component';

describe('Cmp35Component', () => {
  let component: Cmp35Component;
  let fixture: ComponentFixture<Cmp35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp35Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
