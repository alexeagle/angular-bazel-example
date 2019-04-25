import {LayoutModule} from '@angular/cdk/layout';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {Cmp11Component} from './cmp11.component';

describe('Cmp11Component', () => {
  let component: Cmp11Component;
  let fixture: ComponentFixture<Cmp11Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp11Component],
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
    fixture = TestBed.createComponent(Cmp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
