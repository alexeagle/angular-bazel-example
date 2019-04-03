import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp8Component} from './cmp8.component';

describe('Cmp8Component', () => {
  let component: Cmp8Component;
  let fixture: ComponentFixture<Cmp8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp8Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
