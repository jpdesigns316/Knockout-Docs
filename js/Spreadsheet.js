var Spreadsheet = Base.extend({
    templateName: "spreadsheet-template",
    constructor: function(title, numRows, numCols) {
        this.title = ko.observable(title);
        this.numRows = ko.observable(numRows);
        this.numCols = ko.observable(numCols);

        this.rows = ko.observableArray();

        this.init();
    },
    init: function() {
        var rowIndex;


        for (rowIndex = 0; rowIndex < this.numRows(); rowIndex++) {
            this.addRow();
        }
    },
    addRow: function() {
        var row = new Spreadsheet.Row();
        var cell;
        for (var i = 0; i < this.numCols(); i++) {
            cell = new Spreadsheet.Cell();
            row.cells.push(cell);
        }
        this.rows.push(row);
    }
}, {
    Row: Base.extend({
        this.cells = ko.observableArray();
    }),
    Cell: Base.extend({
        this.value = ko.observable();
    })
});
