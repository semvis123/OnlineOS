var ga_wjtje_calculator = new app('ga.wjtje.calculator', 'Calculator');

ga_wjtje_calculator.menu('Calculator');

ga_wjtje_calculator.create = function () {
	return {
		'name': 'Calculator',

		'width': 242,
		'height': 432,
		'minWidth': 242,
		'minHeight': 432,
		'resizable': true,

		'bg': '#5a0c0c',
		'fg': '#fff',

		'content': '<div class="OnlineOs-app-header" style="background-color: #7a1010; color: #fff;">Basic</div><div class="ga-wjtje-calculator-output">0</div><div class="ga-wjtje-calculator-btns"><div class="ga-wjtje-calculator-btn ga-wjtje-calculator-btn-large" data-btn="ce"><div class="ga-wjtje-calculator-btn-inner">CE</div></div><div class="ga-wjtje-calculator-btn ga-wjtje-calculator-btn-large" data-btn="c"><div class="ga-wjtje-calculator-btn-inner">C</div></div><div class="ga-wjtje-calculator-btn" data-btn="7"><div class="ga-wjtje-calculator-btn-inner">7</div></div><div class="ga-wjtje-calculator-btn" data-btn="8"><div class="ga-wjtje-calculator-btn-inner">8</div></div><div class="ga-wjtje-calculator-btn" data-btn="9"><div class="ga-wjtje-calculator-btn-inner">9</div></div><div class="ga-wjtje-calculator-btn" data-btn="+"><div class="ga-wjtje-calculator-btn-inner">+</div></div><div class="ga-wjtje-calculator-btn" data-btn="4"><div class="ga-wjtje-calculator-btn-inner">4</div></div><div class="ga-wjtje-calculator-btn" data-btn="5"><div class="ga-wjtje-calculator-btn-inner">5</div></div><div class="ga-wjtje-calculator-btn" data-btn="6"><div class="ga-wjtje-calculator-btn-inner">6</div></div><div class="ga-wjtje-calculator-btn" data-btn="-"><div class="ga-wjtje-calculator-btn-inner">-</div></div><div class="ga-wjtje-calculator-btn" data-btn="1"><div class="ga-wjtje-calculator-btn-inner">1</div></div><div class="ga-wjtje-calculator-btn" data-btn="2"><div class="ga-wjtje-calculator-btn-inner">2</div></div><div class="ga-wjtje-calculator-btn" data-btn="3"><div class="ga-wjtje-calculator-btn-inner">3</div></div><div class="ga-wjtje-calculator-btn" data-btn="*"><div class="ga-wjtje-calculator-btn-inner">*</div></div><div class="ga-wjtje-calculator-btn" data-btn="0"><div class="ga-wjtje-calculator-btn-inner">0</div></div><div class="ga-wjtje-calculator-btn" data-btn="."><div class="ga-wjtje-calculator-btn-inner">.</div></div><div class="ga-wjtje-calculator-btn" data-btn="="><div class="ga-wjtje-calculator-btn-inner">=</div></div><div class="ga-wjtje-calculator-btn" data-btn="/"><div class="ga-wjtje-calculator-btn-inner">/</div></div></div>'
	};
};

ga_wjtje_calculator.run = function (window_id) {
	// Clear var
	storage[window_id]['a'] = 0;
	storage[window_id]['b'] = 0;
	storage[window_id]['c'] = undefined;
	
	for (var i = 0; i < $('.ga-wjtje-calculator-btn').length; i++) {
		if ($._data($('.ga-wjtje-calculator-btn')[i], "events") == undefined) {
			$($('.ga-wjtje-calculator-btn')[i]).click(function () {
				$this = $(this)[0];
				
				console.log($this.dataset.btn);
				
				// Check witch btn is it
				if ($this.dataset.btn == '+') {
					storage[window_id]['c'] = '+';
				} else if ($this.dataset.btn == '-') {
					storage[window_id]['c'] = '-';
				} else if ($this.dataset.btn == '/') {
					storage[window_id]['c'] = '/';
				} else if ($this.dataset.btn == '*') {
					storage[window_id]['c'] = '*';
				} else if ($this.dataset.btn == '=') {
					if (storage[window_id]['c'] == '+') {
						storage[window_id]['a'] = Number(storage[window_id]['a']) + Number(storage[window_id]['b']);
					} else if (storage[window_id]['c'] == '-') {
						storage[window_id]['a'] = Number(storage[window_id]['a']) - Number(storage[window_id]['b']);
					} else if (storage[window_id]['c'] == '*') {
						storage[window_id]['a'] = Number(storage[window_id]['a']) * Number(storage[window_id]['b']);
					} else if (storage[window_id]['c'] == '/') {
						storage[window_id]['a'] = Number(storage[window_id]['a']) / Number(storage[window_id]['b']);
					}
					
					// Clear b buffer
					storage[window_id]['b'] = 0;
					
					// Look for good output
					for (var i = 0; i < $('.ga-wjtje-calculator-output').length; i++) {
						if ($('.ga-wjtje-calculator-output')[i].parentElement.parentElement.dataset.windowId == window_id) {
							$($('.ga-wjtje-calculator-output')[i]).html(storage[window_id]['a']);
						}
					}
				} else if ($this.dataset.btn == 'c') {
					if (storage[window_id]['c'] == undefined) {
						storage[window_id]['a'] = 0;
					} else {
						storage[window_id]['b'] = 0;
					}
					
					// Look for good output
					for (var i = 0; i < $('.ga-wjtje-calculator-output').length; i++) {
						if ($('.ga-wjtje-calculator-output')[i].parentElement.parentElement.dataset.windowId == window_id) {
							$($('.ga-wjtje-calculator-output')[i]).html(storage[window_id]['a']);
						}
					}
				} else if ($this.dataset.btn == 'ce') {
					storage[window_id]['a'] = 0;
					storage[window_id]['b'] = 0;
					storage[window_id]['c'] = undefined;
					
					// Look for good output
					for (var i = 0; i < $('.ga-wjtje-calculator-output').length; i++) {
						if ($('.ga-wjtje-calculator-output')[i].parentElement.parentElement.dataset.windowId == window_id) {
							$($('.ga-wjtje-calculator-output')[i]).html(storage[window_id]['a']);
						}
					}
				} else { // Normal number is pressed
					if (storage[window_id]['c'] == undefined) {
						if (storage[window_id]['a'] == 0) {
							storage[window_id]['a'] = '';
						}
						
						storage[window_id]['a'] += $this.dataset.btn;
						
						// Look for good output
						for (var i = 0; i < $('.ga-wjtje-calculator-output').length; i++) {
							if ($('.ga-wjtje-calculator-output')[i].parentElement.parentElement.dataset.windowId == window_id) {
								$($('.ga-wjtje-calculator-output')[i]).html(storage[window_id]['a']);
							}
						}
					} else {
						if (storage[window_id]['b'] == 0) {
							storage[window_id]['b'] = '';
						}
						
						storage[window_id]['b'] += $this.dataset.btn;
						
						// Look for good output
						for (var i = 0; i < $('.ga-wjtje-calculator-output').length; i++) {
							if ($('.ga-wjtje-calculator-output')[i].parentElement.parentElement.dataset.windowId == window_id) {
								$($('.ga-wjtje-calculator-output')[i]).html(storage[window_id]['b']);
							}
						}
					}
				}
			});
		}
	}
}
