import { Component } from '@angular/core';

@Component({
	selector:'my-app',
	template:`
		<nav>
			<a [routerLink]="['/page1', 1]">page1</a>
	        <a routerLink="/page2">page2</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class MainComponent{
	
}