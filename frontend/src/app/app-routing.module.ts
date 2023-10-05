import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveTableComponent } from './leave-table/leave-table.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'leave-form', component:LeaveFormComponent},
  {path: 'user-auth', component:UserAuthComponent},
  {path: 'leave-table', component:LeaveTableComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [LeaveTableComponent, LeaveFormComponent, UserAuthComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
