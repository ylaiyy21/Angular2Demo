import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	templateUrl:`../html/page1.html`,
	styleUrls:['../styles/page1.component.css']
})

export class Page1Component implements Component{

	name = '';

	ngOnInit(): void {
	 	this.name = 'page1';
	}
}