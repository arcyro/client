import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import  {TestRepoListComponent} from "./test-repo-list/test-repo-list.component";
import {TestSuiteListComponent} from "./test-suite-list/test-suite-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/test-repo-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'test-repo-results/:id',
    component: TestRepoListComponent
  },
  {
    path: 'test-repo-list',
    component: TestRepoListComponent
  },
  {
    path: 'test-suite-list/:id',
    component: TestSuiteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
