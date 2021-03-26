import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IcfesModulesListComponent } from './serpro-components/icfes-modules-list/icfes-modules-list.component';
import { TestListComponent } from './serpro-components/modules-test/test-list.component';
import { IcfesTestComponent } from './serpro-components/modules-test/icfes-test/icfes-test.component';
import {SummaryTestComponent} from "./serpro-components/modules-test/summary-test/summary-test.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', redirectTo: 'listaModulos', pathMatch : 'full'},
  {path: 'listaModulos', component: IcfesModulesListComponent},
  {path: 'listaTests/:moduleId', component: TestListComponent},
  {path: 'test/:testId/:moduleId', component: IcfesTestComponent,
    children: [ {path: 'SummaryTest', component: SummaryTestComponent}]
  },
  {path: 'login' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
