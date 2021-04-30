import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTestComponent } from './summary-test.component';

describe('SummaryTestComponent', () => {
  let component: SummaryTestComponent;
  let fixture: ComponentFixture<SummaryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
