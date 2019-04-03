import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp31Component} from './cmp31.component';

describe('Cmp31Component', () => {
  let component: Cmp31Component;
  let fixture: ComponentFixture<Cmp31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp31Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
