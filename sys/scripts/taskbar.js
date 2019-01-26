/*
 * Taskbar Manger V0.1a
 * 
 * Requirements:
 * - Jquery
 * - Window Manger
 */

function taskbar_update() {
	$('.OnlineOs-taskbar-app').click(function () {
		$this = $(this);
		// Find the window that was clicked
		for (var i=0, len = $(".OnlineOs-window").length; i < len; i++) {
			if ($(".OnlineOs-window")[i].dataset.windowId == $this[0].dataset.windowId) {
				if ($(".OnlineOs-window")[i].style.display == 'none') {
					$(".OnlineOs-window")[i].style.display = 'block';
				}
				window_activate($(".OnlineOs-window")[i]);
			}
		}
	});
}

function taskbar_create(name, window_id, icon) {
	// Add taskbar button
	$base_icon = '<div class="OnlineOs-taskbar-app" data-window-id="' + window_id + '"></div>';
	$('.OnlineOs-taskbar-switcher').append($base_icon);
	
	// Reload taskbar buttons
	taskbar_update();
}
