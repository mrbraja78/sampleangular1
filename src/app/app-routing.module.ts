import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentroutercomponentComponent } from './studentroutercomponent/studentroutercomponent.component';
import { StudentdetailsroutercomponentComponent } from './studentdetailsroutercomponent/studentdetailsroutercomponent.component';

const routes: Routes = [
  {
    path:'studentLink', component:StudentroutercomponentComponent
  },
  {
    path:'studentdetailsLink', component: StudentdetailsroutercomponentComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
