// JavaScript source code
// DPA DataTables master file
// by Bryan Snyder

//Markers Table
jQuery(document).ready(function () {
    var table = jQuery("#markers-dt").DataTable({
        ajax: "dpaDataTables/markers.txt",
        columns: [
            { data: "Marker #" },
            { data: "Name" },
            { data: "Category" },
            { data: "Street" },
            { data: "City" },
            { data: "County" },
            { data: "Zip" },
            { data: "See More" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });
});

//Joint Sunset Committee Table
jQuery(document).ready(function () {
    var table = jQuery("#jointsunset-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/jointsunset.txt",
        columns: [
            { data: "Start Year" },
            { data: "End Year" },
            { data: "File Name" },
            { data: "File Date" },
            { data: "# of Items" },
            { data: "Box #" },
            { data: "Barcode" },
            { data: "Comments" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });
});

//Governor's Papers Table
jQuery(document).ready(function () {
    var table = jQuery("#govpapers-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/govpapers.txt",
        columns: [
            { data: "RG" },
            { data: "SG" },
            { data: "Series" },
            { data: "Folder" },
            { data: "Start Date" },
            { data: "End Date" },
            { data: "Confidential" },
            { data: "Container" },
            { data: "Gov" },
            { data: "Term" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });
});

//Kent County Probates
jQuery(document).ready(function () {
    var table = jQuery("#probateskc-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/probates-kc.txt",
        columns: [
            { data: "Last Name" },
            { data: "First Name" },
            { data: "MN/MI" },
            { data: "Date of Death" },
            { data: "Box #" },
            { data: "Barcode" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });
});

//Naturalizations
jQuery(document).ready(function () {
    var table = jQuery("#naturalizations-dt").DataTable({
        ajax:
            "https://archivesfiles.delaware.gov/dpaDataTables/naturalizations-dt.txt",
        columns: [
            { data: "RG" },
            { data: "Source" },
            { data: "Last Name" },
            { data: "First Name" },
            { data: "Date" },
            { data: "County" },
            { data: "Type" },
            { data: "Place of Origin" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });
});


    /* State Reports in progress
    var table = jQuery("#staterports-dt").DataTable({
        ajax:
            "https://archivesfiles.delaware.gov/dpaDataTables/statereports-dt.txt",
        columns: [
            { data: "RG" },
            { data: "Pub #" },
            { data: "Box #" },
            { data: "Barcode" },
            { data: "Title" },
            { data: "Author" },
            { data: "" },
            { data: "" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });
    */


    //Insert another table below
