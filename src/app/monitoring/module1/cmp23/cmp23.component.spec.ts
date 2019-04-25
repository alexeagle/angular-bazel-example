import {LayoutModule} from '@angular/cdk/layout';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp23Component} from './cmp23.component';

describe('Cmp23Component', () => {
  let component: Cmp23Component;
  let fixture: ComponentFixture<Cmp23Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp23Component],
          imports: [
            NoopAnimationsModule,
            LayoutModule,
            MatButtonModule,
            MatCardModule,
            MatGridListModule,
            MatIconModule,
            MatMenuModule,
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
