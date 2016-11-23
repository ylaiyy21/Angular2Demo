import { Component,Input  } from '@angular/core';

import { User } from '../pojo/user';

import { UserService } from '../service/user.service';

@Component({
    selector: 'login-list',
    template: `
    		<ul *ngFor="let user of users">
    			<li><span style="color:red">{{user.code}}</span>:{{user.pass}}</li>
    		</ul>
    		`,
   	styles:[`
   		.input_center{
   			align:center;
   			background-color: #CFD8DC !important;
   		}
   		.btn{
   			width:100px;
   			height:20px;
   			background-color:red;
   		}
   	`],
    providers: [UserService]
})

export class ListComponent implements Component{
  users: User[];

  constructor(private userService: UserService) { }

  getUser():void{
    this.users = this.userService.getUser();
  }

  ngOnInit(): void {
    this.getUser();
  }

}
