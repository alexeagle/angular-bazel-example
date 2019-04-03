import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp16Component} from './cmp16.component';

describe('Cmp16Component', () => {
  let component: Cmp16Component;
  let fixture: ComponentFixture<Cmp16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp16Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
