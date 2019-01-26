var ga_wjtje_hello = new app('ga.wjtje.hello', 'Hello World');

ga_wjtje_hello.menu('Hello World!');

ga_wjtje_hello.create = function () {
	return {
		'name': 'Hello World!',
		'bg': '#0c5a0c',
		'fg': '#fff',
		'content': '<div class="OnlineOs-app-header" style="background-color: #107C10; color: #fff;">Home</div><div class="OnlineOs-app-content"><h1>Welcome</h1><p>This is OnlineOs (beta) first application that was written.</p></div>'
	};
};
