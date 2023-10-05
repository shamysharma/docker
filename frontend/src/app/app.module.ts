import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';



import { AppComponent } from './app.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { LeaveTableComponent } from './leave-table/leave-table.component';
import { UserAuthComponent } from './user-auth/user-auth.component';


@NgModule({
  declarations: [AppComponent, LeaveFormComponent, LeaveTableComponent, UserAuthComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule ,HttpClientModule, RouterModule.forRoot([
    {path: 'leave-form', component:LeaveFormComponent},
    {path: 'leave-table', component:LeaveTableComponent},
    { path: 'user-auth', component:UserAuthComponent}
    
  ])], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}