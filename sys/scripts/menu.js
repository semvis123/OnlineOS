/*
 * Menu System v0.2e
 *
 * Requirements:
 * - Jquery
 * - Window Manager
 * - Taskbar Manager
 */

// Open & Close menu
$('.OnlineOs-taskbar-menu-btn').click(function () {
	if ($('.OnlineOs-menu').css('display') == 'block') {
		$('.OnlineOs-menu').css('display', 'none');
	} else {
		$('.OnlineOs-menu').css('display', 'block');
	}
});

// close menu when clicked outside menu
$('.OnlineOs-windows').click(function () {
	if ($('.OnlineOs-menu').css('display') == 'block') {
		$('.OnlineOs-menu').css('display', 'none');
	}
});

// Open app
function menu_reload() {
	for (var i = 0; i < $('.OnlineOs-menu-item').length; i++) {
		if ($._data($('.OnlineOs-menu-item')[i], "events") == undefined) {
			$($('.OnlineOs-menu-item')[i]).click(function () {
				$this = $(this)[0];
				$windows = $('.OnlineOs-window');
				$found = false;

				for (var j = 0; j < $windows.length; j++) {
					if ($windows[j].dataset.appId == $this.dataset.app) {
						$found = true;
					}
				}

				if (!$found) {
					// Create app
					var $window_id = window_create($this.dataset.app);
					taskbar_create($this.dataset.app, $window_id);
				}

				// Close menu
				$('.OnlineOs-menu').css('display', 'none');
			});
		}
	}
}

// Menu add app
function menu_add(id, name) {
	$('.OnlineOs-menu').append('<div class="OnlineOs-menu-item" data-app="' + id + '" style="background-color: #aaa">' + name + '</div>');
	menu_reload();
}
