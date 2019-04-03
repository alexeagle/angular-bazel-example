import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp33Component} from './cmp33.component';

describe('Cmp33Component', () => {
  let component: Cmp33Component;
  let fixture: ComponentFixture<Cmp33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp33Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
