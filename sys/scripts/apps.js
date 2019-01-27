/*
 * Menu System v0.1c
 * 
 * Requirements:
 * - Jquery
 * - Window Manger
 */

// Global vars
var app_id = [
	'ga.wjtje.hello',
	'ga.wjtje.content'
];
var apps = {};
var i;

// Load all apps
function apps_load() {
	console.log('Loading app scripts');

	// Foreach app Load app
	for (i=0; i < app_id.length; i++) {
		console.log('Loaded app: apps/' + app_id[i] + '/app.js');
		
		// Add each app
		var script = document.createElement('script');
		script.src = 'apps/' + app_id[i] + '/app.js';
		script.type = 'text/javascript';
		document.getElementsByTagName('body')[0].appendChild(script);
		
		// Add each app style
		var style = document.createElement('link');
		style.href = 'apps/' + app_id[i] + '/app.css';
		style.rel = 'stylesheet';
		document.getElementsByTagName('body')[0].appendChild(style);
	}
	
	console.log('Installing apps');
}

// Create app
class app {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		apps[id] = this;
		console.log('New app installed: ' + name + ' (' + id + ')');
	}
	
	menu(menu_name) {
		menu_add(this.id, menu_name);
	}
	
	create() {
		return null;
	}
};
