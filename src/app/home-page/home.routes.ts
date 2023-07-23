import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { ContextBlockComponent } from './context-block/context-block.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { CasesListComponent } from './feature-page/cases-list/cases-list.component';
import { HeartTransplantComponent } from './feature-page/heart-transplant/heart-transplant.component';
import { CasesFilesComponent } from './feature-page/cases-files/cases-files.component';
import { HospitalizedComponent } from './feature-page/hospitalized/hospitalized.component';
import { ScoredComponent } from './feature-page/scored/scored.component';

export const HomeRoutes: Routes = [
  {path: '', component: ContextBlockComponent},
  {path: 'notification', component: NotificationPageComponent},
  {path: 'feature', component: FeaturePageComponent},
  {path: 'cases', component: CasesListComponent},
  {path: 'heart', component: HeartTransplantComponent},
  {path: 'casesfile', component: CasesFilesComponent},
  {path: 'hospitalized', component: HospitalizedComponent},
  {path: 'scored', component: ScoredComponent}
];
