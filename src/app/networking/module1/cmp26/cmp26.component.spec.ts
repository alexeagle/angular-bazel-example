import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp26Component} from './cmp26.component';

describe('Cmp26Component', () => {
  let component: Cmp26Component;
  let fixture: ComponentFixture<Cmp26Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp26Component],
          imports: [
            NoopAnimationsModule,
            ReactiveFormsModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
