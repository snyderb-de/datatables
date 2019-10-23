/**
 * JavaScript Test File for DataTables
 * by Bryan Snyder
 * no lic.
 */

jQuery(document).ready(function() {
  // Governor's Appointments
  // function test
  var table = jQuery("#civil-list-dt").DataTable({
    ajax: "https://archivesfiles.delaware.gov/dpaDataTables/civil-list.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "Last Name" },
      { data: "First Name" },
      { data: "Middle" },
      { data: "Prefix/Suffix" },
      { data: "Comments" },
      { data: "Served From" },
      { data: "Served Until" },
      { data: "Elected" },
      { data: "GA #" },
      { data: "District" },
      { data: "County" },
      { data: "Party" },
      { data: "Office" },
      { data: "Position" },
      { data: "Ref" },
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
  // Governor's Appointments
  // function test
  var table = jQuery("#governors-appointments-dt").DataTable({
    ajax:
      "https://archivesfiles.delaware.gov/dpaDataTables/governors-appointments.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "Appointment/Resignation" },
      { data: "Person" },
      { data: "Office" },
      { data: "Governor" },
      { data: "Term" },
      { data: "Year" }
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
  // Apprentice Indentures
  //function test
  var table = jQuery("#broadsides-prints-posters-dt").DataTable({
    ajax:
      "https://archivesfiles.delaware.gov/dpaDataTables/broadsides-prints-posters.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "RG" },
      { data: "SG" },
      { data: "Series" },
      { data: "Barcode" },
      { data: "Date" },
      { data: "Caption" },
      { data: "General Description" },
      { data: "Item" },
      { data: "Ordered By" },
      { data: "Owner" },
      { data: "Colored" },
      { data: "Height" },
      { data: "Width" },
      { data: "Pub/Printer" },
      { data: "Condition" }
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


jQuery(document).ready(function () {
    // Apprentice Indentures
    //function test
    var table = jQuery("#app-indentures-dt").DataTable({
      ajax:
        "https://archivesfiles.delaware.gov/dpaDataTables/apprentice-indentures.txt",
      responsive: true,
      scrollY: false,
      columns: [
        { data: "County" },
        { data: "Date" },
        { data: "Apprentice Lname" },
        { data: "Apprentice Fname" },
        { data: "Sex" },
        { data: "Race" },
        { data: "Authority" },
        { data: "Master Lname" },
        { data: "Master Fname" },
        { data: "Occupation" },
        { data: "Benefits During" },
        { data: "Benefits After" },
        { data: "Box" },
        { data: "Folder" },
        { data: "Series" }
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

      columnDefs: [{type: "html-num-fmt",
          targets: [1]}]
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


jQuery(document).ready(function() {
  // Manuscript Genealogy Records
  // function test
  var table = jQuery("#9225MG-dt").DataTable({
    ajax:
      "https://archivesfiles.delaware.gov/dpaDataTables/manuscriptGenealogies-RG9225.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "Record Group" },
      { data: "Series" },
      { data: "Series Name" },
      { data: "Contents" },
      { data: "Barcode" },
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

jQuery(document).ready(function() {
  // Joseph Brown Turner Index
  // function test
  var table = jQuery("#josephBrownTurnerIndex-dt").DataTable({
    ajax:
      "https://archivesfiles.delaware.gov/dpaDataTables/josephBrownTurnerIndex.txt",
    responsive: true,
    scrollY: false,
    columns: [
      { data: "ID" },
      { data: "Name" }
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