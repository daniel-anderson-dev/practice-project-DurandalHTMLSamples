define(['knockout'], function(ko) {

    var placeholder = "...";

    var itemToAdd = ko.observable(placeholder);
    var allItems = ko.observableArray(["Fries", "Eggs Benedict", "Hamz", "Cheese"]);
    var selectedItems = ko.observableArray(["Hamz", "Fries"]);

    return {
        itemToAdd: itemToAdd,
        allItems: allItems,
        selectedItems: selectedItems,
        addItem: function() {
            var value = itemToAdd();

            if (value != "" && allItems.indexOf(value) < 0) {
                allItems.push(value);
            }

            itemToAdd(placeholder);
        },
        removeSelected: function() {
            allItems.removeAll(selectedItems());
            selectedItems([]);
        },
        sortItems: function() {
            allItems.sort();
        }
    }

});