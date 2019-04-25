import {LayoutModule} from '@angular/cdk/layout';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp7Component} from './cmp7.component';

describe('Cmp7Component', () => {
  let component: Cmp7Component;
  let fixture: ComponentFixture<Cmp7Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp7Component],
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
    fixture = TestBed.createComponent(Cmp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
