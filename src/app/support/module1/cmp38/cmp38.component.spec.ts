import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp38Component} from './cmp38.component';

describe('Cmp38Component', () => {
  let component: Cmp38Component;
  let fixture: ComponentFixture<Cmp38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp38Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
