import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';



import { MainComponent }  from './main.component';
import { LoginComponent }  from './login.component';
import { ListComponent }  from './list.component';
import { RegitCompoent }  from './register.component';
import { Page1Component }  from './page1.component';
import { Page2Component }  from './page2.component';


const routes:Routes = [
	{path:'page1/:id',component: Page1Component},
	{path:'page2',component: Page2Component},
	{path:'login',component: LoginComponent},
	{path:'regit',component: RegitCompoent}
]


@NgModule({
  imports:      [ BrowserModule , FormsModule,
  	RouterModule.forRoot(routes)],
  declarations: [ MainComponent , LoginComponent ,ListComponent,RegitCompoent,Page1Component,Page2Component],
  bootstrap:    [ MainComponent ] 
})
export class AppModule { }
