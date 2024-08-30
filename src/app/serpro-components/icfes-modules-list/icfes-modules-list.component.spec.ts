import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IcfesModulesListComponent } from './icfes-modules-list.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('IcfesModulesListComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: IcfesModulesListComponent;
  let fixture: ComponentFixture<IcfesModulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [IcfesModulesListComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcfesModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
