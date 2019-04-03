import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp34Component} from './cmp34.component';

describe('Cmp34Component', () => {
  let component: Cmp34Component;
  let fixture: ComponentFixture<Cmp34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp34Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
