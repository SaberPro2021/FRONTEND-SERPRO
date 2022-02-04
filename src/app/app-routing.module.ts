import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcfesModulesListComponent } from './serpro-components/icfes-modules-list/icfes-modules-list.component';
import { TestListComponent } from './serpro-components/modules-test/test-list.component';
import { IcfesTestComponent } from './serpro-components/modules-test/icfes-test/icfes-test.component';
import { SummaryTestComponent } from "./serpro-components/modules-test/summary-test/summary-test.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./serpro-components/profile/profile.component";
import { HomeIndexComponent } from "./serpro-components/home-index/home-index.component";
import { AuthguardService } from "./services/authguard.service";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch : 'full'},
  {path: 'listaModulos', component: IcfesModulesListComponent, canActivate: [AuthguardService]},
  {path: 'listaTests/:moduleId', component: TestListComponent, canActivate: [AuthguardService]},
  {path: 'test/:testId/:moduleId', component: IcfesTestComponent, canActivate: [AuthguardService],
    children: [ {path: 'SummaryTest', component: SummaryTestComponent, canActivate : [AuthguardService]} ]},
  {path: 'login' , component: LoginComponent},
  {path: 'profile' , component: ProfileComponent, canActivate: [AuthguardService]},
  {path: 'index' , component: HomeIndexComponent},
  {path: '**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
