import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp0Component} from './cmp0.component';

describe('Cmp0Component', () => {
  let component: Cmp0Component;
  let fixture: ComponentFixture<Cmp0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp0Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
