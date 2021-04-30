import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcfesTestComponent } from './icfes-test.component';

describe('IcfesTestComponent', () => {
  let component: IcfesTestComponent;
  let fixture: ComponentFixture<IcfesTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcfesTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcfesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
