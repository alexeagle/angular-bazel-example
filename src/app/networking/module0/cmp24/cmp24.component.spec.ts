import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp24Component} from './cmp24.component';

describe('Cmp24Component', () => {
  let component: Cmp24Component;
  let fixture: ComponentFixture<Cmp24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp24Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
