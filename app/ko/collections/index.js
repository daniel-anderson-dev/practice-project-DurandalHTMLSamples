define(['durandal/system', 'knockout'], function(system, ko) {

    var Person = function(name, children) {
        this.name = name;
        this.children = ko.observableArray(children);

        this.addChild = function() {
            this.children.push("New Child");
        }.bind(this);
    };

    return {
        people: [
            new Person("Person 1", ['Sub-Person 1','Sub-Person 2','Sub-Person 3']),
            new Person("Person 2", ['Sub-Person 4', 'Sub-Person 5']),
            new Person("Person 3", ['Sub-Person 6'])
        ],
        showRenderTimes: ko.observable(false)
    }

});