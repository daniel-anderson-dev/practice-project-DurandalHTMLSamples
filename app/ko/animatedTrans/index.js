define(['jquery', 'knockout'], function ($, ko)
{

	ko.bindingHandlers.fadeVisible = {
		init: function (element, valueAccessor)
		{
			var value = valueAccessor();
			$(element).toggle(ko.utils.unwrapObservable(value));
		},
		update: function (element, valueAccessor)
		{
			var value = valueAccessor();
			ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
		}
	};

	var planets = ko.observableArray([
        { name: 'Mercury', type: 'rock' },
        { name: 'Venus', type: 'rock' },
        { name: 'Earth', type: 'rock' },
        { name: 'Mars', type: 'rock' },
        { name: 'Jupiter', type: 'gasgiant' },
        { name: 'Saturn', type: 'gasgiant' },
        { name: 'Uranus', type: 'gasgiant' },
        { name: 'Neptune', type: 'gasgiant' },
        { name: 'Pluto', type: 'rock' }
	]);

	var typeToShow = ko.observable('all');

	return {
		planets: planets,
		typeToShow: typeToShow,
		displayAdvancedOptions: ko.observable(false),
		addPlanet: function (type)
		{
			planets.push({name: 'New Planet', type: type});
		},
		planetsToShow: ko.computed(function ()
		{
			var desiredType = typeToShow();
			if (desiredType == 'all')
			{
				return planets();
			}

			return ko.utils.arrayFilter(planets(), function (planet)
			{
				return planet.type == desiredType;
			});
		}),
		showPlanetElement: function (elem)
		{
			if (elem.nodeType === 1)
			{
				$(elem).hide().slideDown();
			}
		},
		hidePlanetElement: function (elem)
		{
			if (elem.nodeType === 1)
			{
				$(elem).slideUp(function () { $(elem).remove(); })
			}
		}
	}

});