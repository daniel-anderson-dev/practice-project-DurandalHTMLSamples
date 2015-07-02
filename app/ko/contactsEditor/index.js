define(['durandal/system', 'jquery', 'knockout'], function (system, $, ko)
{

	var initialData = [
		{
			firstName: 'User',
			lastName: 'A',
			phones: [
				{ type: 'mobile', number: '555 555 5544' },
				{ type: 'work', number: '555 444 3322' }
			]
		},
		{
			firstName: 'User',
			lastName: 'Alternate',
			phones: [
				{ type: 'mobile', number: '444 333 2211' },
				{ type: 'home', number: '333 222 4433' }
			]
		}
	];


	var ContactsModel = function (contacts)
	{

		var self = this;

		self.contacts = ko.observableArray(ko.utils.arrayMap(contacts, function (contact)
		{
			return { firstName: contact.firstName, lastName: contact.lastName, phones: ko.observableArray(contact.phones) };
		}));

		self.addContact = function ()
		{
			self.contacts.push({
				firstName: '',
				lastName: '',
				phones: ko.observableArray()
			});
		}

		self.removeContact = function (contact)
		{
			self.contacts.remove(contact);
		}

		self.addPhone = function (contact)
		{
			contact.phones.push({
				type: '',
				number: ''
			});
		}

		self.removePhone = function (phone)
		{
			$.each(self.contacts(), function ()
			{
				this.phones.remove(phone);
			});
		}

		self.save = function ()
		{
			self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2));
		}

		self.lastSavedJson = ko.observable('');

	}

	return new ContactsModel(initialData);

});