/*
 * Window Manger V0.2b
 * 
 * Requirements:
 * - Jquery
 * - Taskbar system
 */

// Global var
$window_id = 1;
storage = {};

// Window Movement
function window_movement() {
	$(".OnlineOs-windows .OnlineOs-window").draggable({
		handle: ".OnlineOs-window-titlebar",
		iframeFix: true,
		stack: ".OnlineOs-windows .OnlineOs-window",
		scroll: false
	});
	
	$(".OnlineOs-window-resizable").resizable({
		minHeight: 150,
		minWidth: 200,
		start: function(event, ui) {
			$('iframe').css('pointer-events','none');
		},
		stop: function(event, ui) {
			$('iframe').css('pointer-events','auto');
		}
	});
}

// Window Click to active
function window_click_active() {
	$('.OnlineOs-window-content').click(function () {
		window_activate($(this)[0].parentElement);
	});
}

// Window Titlebar button
function window_titlebar_btn() {
	//window close
	$('.OnlineOs-window-close').click(function () {
		$id = $(this)[0].parentElement.parentElement.dataset.windowId;
		$(this)[0].parentElement.parentElement.remove();
		
		for (var i=0; i < $('.OnlineOs-taskbar-app').length; i++) {
			if ($('.OnlineOs-taskbar-app')[i].dataset.windowId == $id) {
				$('.OnlineOs-taskbar-app')[i].remove();
			}
		}
	});
	
	//window hide
	$('.OnlineOs-window-hide').click(function () {
		$(this)[0].parentElement.parentElement.style.display = 'none'
	});
}

// window activate
function window_activate(window) {
	var $this = window;
	var $windows = $(".OnlineOs-window");
	var $zIndex = 0;
	var $own_zIndex = $this.style.zIndex;
					
	for (var i=0, len = $windows.length; i < len; i++) {
		if ($windows[i].style.zIndex > $zIndex) {
			$zIndex = $windows[i].style.zIndex;
		}
	}
					
	if ($zIndex != $own_zIndex) {
		for (var i=0, len = $windows.length; i < len; i++) {
			$windows[i].style.zIndex = Number($windows[i].style.zIndex) - 1;
		}
						
		$this.style.zIndex = $zIndex;
	}
}

// Window system update
function window_update() {
	window_movement();
	window_click_active();
	window_titlebar_btn();
}


// Window create 
function window_create(id) {
	var $class = '';
	var $style = '';
	
	// Load app
	var app = apps[id].create();
	
	// Size
	if (app.resizable == true) {
		$class = ' OnlineOs-window-resizable'
	}
	
	if (app.width != undefined) {
		$style = 'width: ' + app.width + 'px; height: ' + app.height + 'px;';
	}
	
	if (app.minWidth != undefined) {
		$style += 'min-Width: ' + app.width + 'px; min-Height: ' + app.height + 'px;';
	}
	
	// Create window
	$base_window = '<div class="OnlineOs-window' + $class + '" data-window-id="' + $window_id + '" data-app-id="' + id + '" style="' + $style + '"><div class="OnlineOs-window-titlebar" style="background-color:' + app.bg + '; color:' + app.fg + ';"><div class="OnlineOs-window-title">' + app.name + '</div><div class="OnlineOs-window-hide">&#59721;</div><div class="OnlineOs-window-close">&#59719;</div></div><div class="OnlineOs-window-content">' + app.content + '</div></div>';
	$('.OnlineOs-windows').append($base_window);
	
	// Find window data
	var $window;
	for (var i=0; i < $(".OnlineOs-window").length; i++) {
		if ($(".OnlineOs-window")[i].dataset.windowId == $window_id) {
			$window = $(".OnlineOs-window")[i];
		}
	}
	
	// Set window to active
	window_activate($window);
	
	// Update window Movement Resizement and buttons
	window_update();
	
	// Set the storage and run the app
	storage[$window_id] = {};
	apps[id].run($window_id);
	
	// Update window id
	$window_id += 1;
	
	// Return added window id
	return $window_id - 1;
}
