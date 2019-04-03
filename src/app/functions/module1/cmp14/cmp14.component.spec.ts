import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp14Component} from './cmp14.component';

describe('Cmp14Component', () => {
  let component: Cmp14Component;
  let fixture: ComponentFixture<Cmp14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp14Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
