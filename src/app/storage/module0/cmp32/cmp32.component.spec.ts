import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp32Component} from './cmp32.component';

describe('Cmp32Component', () => {
  let component: Cmp32Component;
  let fixture: ComponentFixture<Cmp32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp32Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
