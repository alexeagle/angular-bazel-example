import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp1Component} from './cmp1.component';

describe('Cmp1Component', () => {
  let component: Cmp1Component;
  let fixture: ComponentFixture<Cmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp1Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
