/**
 * JavaScript Test File for DataTables
 * by Bryan Snyder
 * no lic.
*/

// FIXME: find an AJAX solution for local testing.
// TODO: do we make a ready function for each Table?
// TODO: will need to add Parent/Child code here and that may require seperate          ready functions

// (TODO:)
// HACK: this is just a test for TODO customization
// LOOKUP: this is just a test for TODO customization
// DEBUG: this is just a test for TODO customization


jQuery(document).ready(function() {
  // DE SAR Table
  var table = jQuery("#deSAR-dt").DataTable({
    ajax: "https://archivesfiles.delaware.gov/dpaDataTables/deSAR.txt",
    responsive: true,
    columns: [
      {
        data: "National #"
      },
      {
        data: "Solider Surname"
      },
      {
        data: "Solider First Name"
      },
      {
        data: "Solider Suffix"
      },
      {
        data: "State"
      },
      {
        data: "Chapter"
      },
      {
        data: "Service"
      },
      {
        data: "DE Member #"
      },
      {
        data: "DE Surname"
      },
      {
        data: "DE First Name"
      },
      {
        data: "DE Middle Name"
      },
      {
        data: "DE Suffix"
      }
    ],
    order: [[0, "asc"]],
    columnDefs: [
      {
        type: "html-num-fmt",
        targets: [1]
      }
    ]
  });

  //keep this inside the doc ready for this table to isolate the function
  //
  jQuery(function(e){
    jQuery.fn.DataTable.tables({
        visible: true,
        api: true
    }).column.adjust();
  });
  // Insert another table below
  // ending bracket below here
});
