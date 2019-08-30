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

jQuery(document).ready(function () {
    // DE SAR Table
    //function test
    var table = jQuery("#deSAR-dt").DataTable({
      ajax: "https://archivesfiles.delaware.gov/dpaDataTables/deSAR.txt",
      responsive: true,
      scrollY: false,
      columns: [
        { data: "National #" },
        { data: "Solider Surname" },
        { data: "Solider First Name" },
        { data: "Solider Suffix" },
        { data: "State" },
        { data: "Chapter" },
        { data: "Service" },
        { data: "DE Member #" },
        { data: "DE Surname" },
        { data: "DE First Name" },
        { data: "DE Middle Name" },
        { data: "DE Suffix" }
      ],

      order: [[0, "asc"]],

      columnDefs: [
        {
          type: "html-num-fmt",
          targets: [1]
        }
      ]
    });
    // keep this inside the doc ready for this table to isolate the function
    jQuery(function(e) {
    jQuery.fn.DataTable.tables({
        visible: true,
        api: true
    }).column.adjust();
    });
});

jQuery(document).ready(function () {
    // Florence Lewis Table
    // function test

    var table = jQuery("#florence-lewis-dt").DataTable({
      ajax:
        "https://archivesfiles.delaware.gov/dpaDataTables/9200_L08_003_Florence_Lewis.txt",
      responsive: true,
      scrollY: false,
      columns: [
        { data: "ID" },
        { data: "Document Type" },
        { data: "Buyer Last Name" },
        { data: "Buyer First Name" },
        { data: "Owner Last Name" },
        { data: "Owner First Name" },
        { data: "County" },
        { data: "Hundred" },
        { data: "Town" },
        { data: "Property Description" },
        { data: "Year" },
        { data: "Box" },
        { data: "Folder" }
      ],
      order: [[0, "asc"]],

      columnDefs: [
        {
          type: "html-num-fmt",
          targets: [1]
        }
      ]
    });

    // keep this inside the doc ready for this table to isolate the function
    jQuery(function (e) {
        jQuery.fn.DataTable.tables({
            visible: true,
            api: true
        }).column.adjust();
    });
});


jQuery(document).ready(function() {
  // Bible Records
  // function test
  var table = jQuery("#bible-records-dt").DataTable({
    ajax: "https://archivesfiles.delaware.gov/dpaDataTables/bible-records.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "Family Name" },
      { data: "B/C #" },
      { data: "Bible #" },
      { data: "Vol & Pg #" },
      { data: "Location" }
    ],

    order: [[0, "asc"]],
    columnDefs: [{ type: "html-num-fmt", targets: [1] }]
  });

  // keep this inside the doc ready for this table to isolate the function
  jQuery(function(e) {
    jQuery.fn.DataTable.tables({
      visible: true,
      api: true
    }).column.adjust();
  });
});

jQuery(document).ready(function() {
  // Row Collection Records
  // function test
  var table = jQuery("#row-collection-dt").DataTable({
    ajax: "https://archivesfiles.delaware.gov/dpaDataTables/rowCollection.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "ID" },
      { data: "Subject" },
      { data: "Sub-Category" },
      { data: "Year" },
      { data: "Barcode" }
    ],

    order: [[0, "asc"]],
    columnDefs: [{ type: "html-num-fmt", targets: [1] }]
  });

  // keep this inside the doc ready for this table to isolate the function
  jQuery(function(e) {
    jQuery.fn.DataTable.tables({
      visible: true,
      api: true
    }).column.adjust();
  });
});

jQuery(document).ready(function() {
  // General Reference Pamphlet Records
  // function test
  var table = jQuery("#pamphlet-collection-dt").DataTable({
    ajax:
      "https://archivesfiles.delaware.gov/dpaDataTables/pamphletCollection.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "Subject" },
      { data: "Author" },
      { data: "Title" },
      { data: "Date" },
      { data: "Box #" },
      { data: "Barcode" }
    ],

    order: [[0, "asc"]],
    columnDefs: [{ type: "html-num-fmt", targets: [1] }]
  });

  // keep this inside the doc ready for this table to isolate the function
  jQuery(function(e) {
    jQuery.fn.DataTable.tables({
      visible: true,
      api: true
    }).column.adjust();
  });
});

jQuery(document).ready(function() {
  // General Reference Records
  // function test
  var table = jQuery("#generalReference-collection-dt").DataTable({
    ajax:
      "https://archivesfiles.delaware.gov/dpaDataTables/generalReferenceCollection.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "Input Order" },
      { data: "Gen Ref" },
      { data: "Title" },
      { data: "Desc" },
      { data: "Dates" },
      { data: "Folder" },
      { data: "Keywords" },
      { data: "Notes" }
    ],

    order: [[0, "asc"]],
    columnDefs: [{ type: "html-num-fmt", targets: [1] }]
  });

  // keep this inside the doc ready for this table to isolate the function
  jQuery(function(e) {
    jQuery.fn.DataTable.tables({
      visible: true,
      api: true
    }).column.adjust();
  });
});