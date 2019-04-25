import {LayoutModule} from '@angular/cdk/layout';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp14Component} from './cmp14.component';

describe('Cmp14Component', () => {
  let component: Cmp14Component;
  let fixture: ComponentFixture<Cmp14Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp14Component],
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
    fixture = TestBed.createComponent(Cmp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
