$(function() {
    var doc = {
        title: ko.observable("Hello World"),
        body: ko.observable("Welcome to the world, my friends")
    };

    ko.applyBindings(doc);
})
