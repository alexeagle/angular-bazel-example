import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp35Component} from './cmp35.component';

describe('Cmp35Component', () => {
  let component: Cmp35Component;
  let fixture: ComponentFixture<Cmp35Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp35Component],
          imports: [
            NoopAnimationsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatCardModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
