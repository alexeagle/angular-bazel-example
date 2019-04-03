import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp37Component} from './cmp37.component';

describe('Cmp37Component', () => {
  let component: Cmp37Component;
  let fixture: ComponentFixture<Cmp37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp37Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
