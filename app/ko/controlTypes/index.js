define(['knockout'], function(ko) {
	return {
		stringValue: ko.observable("Hello"),
		passwordValue: ko.observable("MyPassword"),
		booleanValue: ko.observable(true),
		optionValues: ['Alpha', 'Beta', 'Gamma'],
		selectedOptionValue: ko.observable("Gamma"),
		multipleSelectedOptionValues: ko.observable(["Alpha"]),
		radioSelectedOptionValue: ko.observable("Beta")
	}
});