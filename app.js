angular.module('app', ['components'])

	.controllerAs('BeerCounter', function($scope, $locale) {
		this.beers = [0, 1, 2, 3, 4, 5, 6];
		if ($locale.id == 'en-us') {
			this.beerForms = {
				0: 'no beers',
				one: '{} beer',
				other: '{} beers'
			};
		} else {
			this.beerForms = {
				0: 'žiadne pivo',
				one: '{} pivo',
				few: '{} pivá',
				other: '{} pív'
			};
		}
	});