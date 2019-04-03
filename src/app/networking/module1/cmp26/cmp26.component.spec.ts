import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp26Component} from './cmp26.component';

describe('Cmp26Component', () => {
  let component: Cmp26Component;
  let fixture: ComponentFixture<Cmp26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp26Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
