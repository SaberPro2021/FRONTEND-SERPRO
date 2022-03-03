import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PROJECT COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

import { RouterModule } from '@angular/router';
import { IcfesModulesListComponent } from './serpro-components/icfes-modules-list/icfes-modules-list.component';
import { TestListComponent } from './serpro-components/modules-test/test-list.component';
import { IcfesTestComponent } from './serpro-components/modules-test/icfes-test/icfes-test.component';
import { MultipleSelectionQuestionComponent } from './serpro-components/modules-test/questions/multiple-selection-question/multiple-selection-question.component';

// MATERIAL COMPONENTS
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { NgCircleProgressModule } from 'ng-circle-progress';
<<<<<<< HEAD:src/app/app.module.ts
=======
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37:FRONT_APP_SERPRO-master/src/app/app.module.ts


//Componente Header
import { HeaderComponent } from './serpro-components/header/header.component';

//services
import { QuestionsService } from './services/question.service';
import { SummaryTestComponent } from './serpro-components/modules-test/summary-test/summary-test.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './serpro-components/profile/profile.component';
import { MedalComponent } from './serpro-components/profile/medal/medal.component';
import { TimerComponent } from './serpro-components/timer/timer.component';
import { HomeIndexComponent } from './serpro-components/home-index/home-index.component'
import { AuthguardService } from './services/authguard.service';
<<<<<<< HEAD:src/app/app.module.ts
import { DynamicChildLoaderDirective } from './services/dynamic-child-loader.directive'
=======

>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37:FRONT_APP_SERPRO-master/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    IcfesModulesListComponent,
    TestListComponent,
    IcfesTestComponent,
    MultipleSelectionQuestionComponent,
    HeaderComponent,
    SummaryTestComponent,
    LoginComponent,
    ProfileComponent,
    MedalComponent,
    TimerComponent,
<<<<<<< HEAD:src/app/app.module.ts
    HomeIndexComponent,
    DynamicChildLoaderDirective
=======
    HomeIndexComponent
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37:FRONT_APP_SERPRO-master/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRadioModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    ToastrModule.forRoot(),
<<<<<<< HEAD:src/app/app.module.ts
    NgCircleProgressModule.forRoot()
  ],
  providers: [QuestionsService, AuthguardService], 
  entryComponents: [TimerComponent],
  bootstrap: [AppComponent]
=======
    NgCircleProgressModule.forRoot(),
    GoogleChartsModule.forRoot()
  ],
  providers: [QuestionsService, AuthguardService], 
  bootstrap: [AppComponent],
  entryComponents: [GoogleChartComponent]
>>>>>>> e2338841b56ba7e1f3acd0c75468d1c3d5475d37:FRONT_APP_SERPRO-master/src/app/app.module.ts
})
export class AppModule { }
//