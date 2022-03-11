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

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

//Componente Header
import { HeaderComponent } from './serpro-components/header/header.component';

//services
import { QuestionsService } from './services/question.service';
import { SummaryTestComponent } from './serpro-components/modules-test/summary-test/summary-test.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './serpro-components/profile/profile.component';
import { TimerComponent } from './serpro-components/timer/timer.component';
import { HomeIndexComponent } from './serpro-components/home-index/home-index.component'
import { AuthguardService } from './services/authguard.service';
import { DynamicChildLoaderDirective } from './services/dynamic-child-loader.directive';
import { GaugeComponent } from './serpro-components/profile/gauge/gauge.component'

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
    TimerComponent,
    HomeIndexComponent,
    DynamicChildLoaderDirective,
    GaugeComponent
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
    NgCircleProgressModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts
    })
  ],
  providers: [QuestionsService, AuthguardService], 
  entryComponents: [GaugeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
//