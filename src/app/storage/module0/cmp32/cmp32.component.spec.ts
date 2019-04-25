import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp32Component} from './cmp32.component';

describe('Cmp32Component', () => {
  let component: Cmp32Component;
  let fixture: ComponentFixture<Cmp32Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp32Component],
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
    fixture = TestBed.createComponent(Cmp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
