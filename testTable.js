// JavaScript source code
// DPA DataTables master file
// by Bryan Snyder

// TODO: do we make a ready function for each Table?
// TODO: will need to add Parent/Child code here and that may require seperate          ready functions

jQuery(document).ready(function() {
  // DE SAR Table
  var table = jQuery("#deSAR-dt").DataTable({
    ajax: "dpaDataTablesdeSAR.txt",
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

  // Insert another table below
  // ending bracket below here
});
