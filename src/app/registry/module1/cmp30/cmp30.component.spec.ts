import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp30Component} from './cmp30.component';

describe('Cmp30Component', () => {
  let component: Cmp30Component;
  let fixture: ComponentFixture<Cmp30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp30Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
