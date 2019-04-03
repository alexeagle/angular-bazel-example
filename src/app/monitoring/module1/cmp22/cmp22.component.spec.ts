import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Cmp22Component} from './cmp22.component';

describe('Cmp22Component', () => {
  let component: Cmp22Component;
  let fixture: ComponentFixture<Cmp22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [Cmp22Component]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
