import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp25Component} from './cmp25.component';

describe('Cmp25Component', () => {
  let component: Cmp25Component;
  let fixture: ComponentFixture<Cmp25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp25Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
