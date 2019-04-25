import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp10Component} from './cmp10.component';

describe('Cmp10Component', () => {
  let component: Cmp10Component;
  let fixture: ComponentFixture<Cmp10Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp10Component],
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
    fixture = TestBed.createComponent(Cmp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
