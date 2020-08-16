import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';


const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'task',component:AddtaskComponent},
  {path:'schedule',component:ScheduleListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,SignupComponent,NavbarComponent,AddtaskComponent,
                                  ScheduleListComponent]
