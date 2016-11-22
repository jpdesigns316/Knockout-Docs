//JQuery on load
$(function() {

    var viewModel = new KnockoutDocs();


    viewModel.selectedItem.subscribe(function(newValue) {

    });

    ko.applyBindings(viewModel);


});
