import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp19Component} from './cmp19.component';

describe('Cmp19Component', () => {
  let component: Cmp19Component;
  let fixture: ComponentFixture<Cmp19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp19Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
