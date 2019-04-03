import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp29Component} from './cmp29.component';

describe('Cmp29Component', () => {
  let component: Cmp29Component;
  let fixture: ComponentFixture<Cmp29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp29Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
