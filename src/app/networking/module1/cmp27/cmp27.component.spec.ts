import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp27Component} from './cmp27.component';

describe('Cmp27Component', () => {
  let component: Cmp27Component;
  let fixture: ComponentFixture<Cmp27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp27Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
