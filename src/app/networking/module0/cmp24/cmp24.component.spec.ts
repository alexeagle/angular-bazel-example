import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp24Component} from './cmp24.component';

describe('Cmp24Component', () => {
  let component: Cmp24Component;
  let fixture: ComponentFixture<Cmp24Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp24Component],
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
    fixture = TestBed.createComponent(Cmp24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
