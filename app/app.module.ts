import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { LoginComponent }  from './login.component';
import { ListComponent }  from './list.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ LoginComponent ,ListComponent],
  bootstrap:    [ LoginComponent ]
})
export class AppModule { }
