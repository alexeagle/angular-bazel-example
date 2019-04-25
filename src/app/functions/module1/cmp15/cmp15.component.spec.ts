import {LayoutModule} from '@angular/cdk/layout';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp15Component} from './cmp15.component';

describe('Cmp15Component', () => {
  let component: Cmp15Component;
  let fixture: ComponentFixture<Cmp15Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp15Component],
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
    fixture = TestBed.createComponent(Cmp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
