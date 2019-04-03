import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp11Component} from './cmp11.component';

describe('Cmp11Component', () => {
  let component: Cmp11Component;
  let fixture: ComponentFixture<Cmp11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp11Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
