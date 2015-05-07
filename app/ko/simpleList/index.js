define(['knockout'], function(ko) {

    var items = ko.observableArray(["Alpha", "Beta", "Gamma"]);
    var itemToAdd = ko.observable("...");

    return {
        items: items,
        itemToAdd: itemToAdd,
        addItem: function() {
            if (itemToAdd() != '') {
                items.push(itemToAdd());
                itemToAdd('---');
            };
        }
    }

});