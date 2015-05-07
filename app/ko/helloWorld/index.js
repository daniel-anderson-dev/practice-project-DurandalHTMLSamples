define(['knockout'], function(ko) {

    var firstName = ko.observable("Planet");
    var lastName = ko.observable("Earth");

    var fullName = ko.computed(function () {
        return firstName() + " " + lastName();
    });

    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName
    }

});