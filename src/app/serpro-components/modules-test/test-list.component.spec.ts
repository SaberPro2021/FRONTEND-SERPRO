import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListComponent } from './test-list.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ModulesTestListComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: TestListComponent;
  let fixture: ComponentFixture<TestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [TestListComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
