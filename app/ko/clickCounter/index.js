﻿define(['knockout'], function(ko) {
    
    var counter = ko.observable(0);

    var limiter = ko.computed(function() {
        return counter() >= 3;
    });

    return {
        numberOfClicks: counter,
        hasClickedTooManyTimes: limiter,
        registerClick: function() {
            counter(counter() + 1);
        },
        resetClicks: function() {
            counter(0);
        }
    }

});