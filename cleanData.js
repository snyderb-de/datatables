/*
* Clean and Transform Data
* test script v 0.0.1
* by Bryan Snyder
*/

// stick with Dates for easy testing
// TODO: set this up to take in ANY Date format and output to YYYY/MM/DD

function process(input, columns) {

    var output = [];

    input.forEach(function (inRow, r) {
        var outRow = {};

        var date = moment(inRow.Date, 'YY-MM-DD');
        outRow.Date = date.format('MMM Do YYYY');

        output.push(outRow);
    });

    return output;

}