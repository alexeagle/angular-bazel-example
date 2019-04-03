import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp28Component} from './cmp28.component';

describe('Cmp28Component', () => {
  let component: Cmp28Component;
  let fixture: ComponentFixture<Cmp28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp28Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
