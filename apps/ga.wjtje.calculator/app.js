var ga_wjtje_calculator = new app('ga.wjtje.calculator', 'Calculator');
var ga_wjtje_calculator_a = 0;
var ga_wjtje_calculator_b = 0;
var ga_wjtje_calculator_c;

ga_wjtje_calculator.menu('Calculator');

ga_wjtje_calculator.create = function () {
	return {
		'name': 'Calculator',

		'width': 242,
		'height': 372,
		'resizable': false,

		'bg': '#5a0c0c',
		'fg': '#fff',

		'content': '<div class="OnlineOs-app-header" style="background-color: #7a1010; color: #fff;">Basic</div><div class="ga-wjtje-calculator-output">0</div><div class="ga-wjtje-calculator-btn" data-btn="7"><div class="ga-wjtje-calculator-btn-inner">7</div></div><div class="ga-wjtje-calculator-btn" data-btn="8"><div class="ga-wjtje-calculator-btn-inner">8</div></div><div class="ga-wjtje-calculator-btn" data-btn="9"><div class="ga-wjtje-calculator-btn-inner">9</div></div><div class="ga-wjtje-calculator-btn" data-btn="+"><div class="ga-wjtje-calculator-btn-inner">+</div></div><div class="ga-wjtje-calculator-btn" data-btn="4"><div class="ga-wjtje-calculator-btn-inner">4</div></div><div class="ga-wjtje-calculator-btn" data-btn="5"><div class="ga-wjtje-calculator-btn-inner">5</div></div><div class="ga-wjtje-calculator-btn" data-btn="6"><div class="ga-wjtje-calculator-btn-inner">6</div></div><div class="ga-wjtje-calculator-btn" data-btn="-"><div class="ga-wjtje-calculator-btn-inner">-</div></div><div class="ga-wjtje-calculator-btn" data-btn="1"><div class="ga-wjtje-calculator-btn-inner">1</div></div><div class="ga-wjtje-calculator-btn" data-btn="2"><div class="ga-wjtje-calculator-btn-inner">2</div></div><div class="ga-wjtje-calculator-btn" data-btn="3"><div class="ga-wjtje-calculator-btn-inner">3</div></div><div class="ga-wjtje-calculator-btn" data-btn="*"><div class="ga-wjtje-calculator-btn-inner">*</div></div><div class="ga-wjtje-calculator-btn" data-btn="0"><div class="ga-wjtje-calculator-btn-inner">0</div></div><div class="ga-wjtje-calculator-btn" data-btn="."><div class="ga-wjtje-calculator-btn-inner">.</div></div><div class="ga-wjtje-calculator-btn" data-btn="="><div class="ga-wjtje-calculator-btn-inner">=</div></div><div class="ga-wjtje-calculator-btn" data-btn="/"><div class="ga-wjtje-calculator-btn-inner">/</div></div>'
	};
};

ga_wjtje_calculator.run = function () {
	// Clear var
	ga_wjtje_calculator_a = 0;
	ga_wjtje_calculator_b = 0;
	ga_wjtje_calculator_c = undefined;
	
	for (var i = 0; i < $('.ga-wjtje-calculator-btn').length; i++) {
		if ($._data($('.ga-wjtje-calculator-btn')[i], "events") == undefined) {
			$($('.ga-wjtje-calculator-btn')[i]).click(function () {
				$this = $(this)[0];
				
				// Check witch btn is
				if ($this.dataset.btn == '+') {
					ga_wjtje_calculator_c = '+';
				} else if ($this.dataset.btn == '-') {
					ga_wjtje_calculator_c = '-';
				} else if ($this.dataset.btn == '/') {
					ga_wjtje_calculator_c = '/';
				} else if ($this.dataset.btn == '*') {
					ga_wjtje_calculator_c = '*';
				} else if ($this.dataset.btn == '=') {
					if (ga_wjtje_calculator_c == '+') {
						ga_wjtje_calculator_a = Number(ga_wjtje_calculator_a) + Number(ga_wjtje_calculator_b);
					} else if (ga_wjtje_calculator_c == '-') {
						ga_wjtje_calculator_a = Number(ga_wjtje_calculator_a) - Number(ga_wjtje_calculator_b);
					} else if (ga_wjtje_calculator_c == '*') {
						ga_wjtje_calculator_a = Number(ga_wjtje_calculator_a) * Number(ga_wjtje_calculator_b);
					} else if (ga_wjtje_calculator_c == '/') {
						ga_wjtje_calculator_a = Number(ga_wjtje_calculator_a) / Number(ga_wjtje_calculator_b);
					}
					
					$('.ga-wjtje-calculator-output').html(ga_wjtje_calculator_a);
				} else {
					if (ga_wjtje_calculator_c == undefined) {
						if (ga_wjtje_calculator_a == 0) {
							ga_wjtje_calculator_a = '';
						}
						
						ga_wjtje_calculator_a += $this.dataset.btn;
						
						$('.ga-wjtje-calculator-output').html(ga_wjtje_calculator_a);
					} else {
						if (ga_wjtje_calculator_b == 0) {
							ga_wjtje_calculator_b = '';
						}
						
						ga_wjtje_calculator_b += $this.dataset.btn;
						
						$('.ga-wjtje-calculator-output').html(ga_wjtje_calculator_b);
					}
				}
			});
		}
	}
}
