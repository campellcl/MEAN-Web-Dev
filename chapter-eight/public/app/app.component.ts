import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'mean-app',
    template: `
    	<h1>Hello World</h1>
	<router-outlet></router-outlet>
    `,
})
export class AppComponent {}

