import { Component } from '@angular/core';
import { heros } from './hero';

export class User{
	code:number,
	pass:string
}

@Component({
    selector: 'my-app',
    template: `
    		<h1 >登录</h1>
    		<div class="input_center">
    			<span>账号</span>
    			<input [(ngModel)]="user.code">
    		</div>
    		<div class="input_center">  
    			<span>密码</span>
    			<input type="password" [(ngModel)]="user.pass">
    		</div>
    		<button class="btn" (click)="onLogin(user)">添加</button>
    		<login-list></login-list>
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
   	`]
})
export class LoginComponent {
	user  = User;
	onLogin(user:User):void{
		heros  = Heros;
		console.log(heros);
		heros.push(user);
		console.log('登录成功',user.code,user.pass,heros);

	}

}
