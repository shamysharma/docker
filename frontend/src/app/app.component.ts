import { style } from '@angular/animations';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { LeaveTableComponent } from './leave-table/leave-table.component';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title= 'frontend';
  
}


