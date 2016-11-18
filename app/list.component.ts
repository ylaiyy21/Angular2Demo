import { Component,Input  } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'login-list',
    template: `
    		<ul *ngFor="let hero of heros">
    			<li>{{hero.code}}</li>
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
   	`]
})

export class ListComponent {
	heros = Heros;
}
