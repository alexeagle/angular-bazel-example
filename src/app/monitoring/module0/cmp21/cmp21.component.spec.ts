import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp21Component} from './cmp21.component';

describe('Cmp21Component', () => {
  let component: Cmp21Component;
  let fixture: ComponentFixture<Cmp21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp21Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
