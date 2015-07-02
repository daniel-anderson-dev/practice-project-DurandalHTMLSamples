define(['durandal/system', 'durandal/app', 'jquery', 'knockout'], function (system, app, $, ko)
{

	var GiftModel = function (gifts)
	{
		var self = this;

		self.gifts = ko.observableArray(gifts);

		self.addGift = function ()
		{
			self.gifts.push({
				name: "",
				price: ""
			});
		}

		self.removeGift = function(gift)
		{
			self.gifts.remove(gift);
		}

		self.save = function (form)
		{
			app.showMessage('Not sending to a server: ' + ko.utils.stringifyJson(self.gifts), 'Grid Editor - Results');
		}

		self.activate = function ()
		{
			console.log('activate grid');
		}

		self.canActivate = function ()
		{
			console.log('canActivate grid');
			return true;
		}

		self.canDeactivate = function ()
		{
			return app.showMessage('Are you sure you want to leave?  Please dont...', 'Leaving', ['Yes', 'No']);
		}

		self.deactivate = function()
		{
			console.log('deactivate grid');
		}

	}

	return new GiftModel([{ name: "Test Item", price: "0.99" }, {name: "New Item", price: "100.00"}]);


});