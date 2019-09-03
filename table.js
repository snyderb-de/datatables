// JavaScript source code
// DPA DataTables master file
// by Bryan Snyder

// TODO: do we make a ready function for each Table?
// TODO: will need to add Parent/Child code here and that may require seperate          ready functions

// TODO: wrap all these tables into their own docReadyFunction


jQuery(document).ready(function () {
    //Markers Table
    var table = jQuery("#markers-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/markers.txt",
        repsonsive: true,
        columns: [
            { data: "Marker #" },
            { data: "Marker Name" },
            { data: "Marker Category" },
            { data: "Street Address" },
            { data: "City/Town" },
            { data: "County" },
            { data: "Zip Code" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });

    //Joint Sunset Committee Table
    var table = jQuery("#jointsunset-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/jointsunset.txt",
        repsonsive: true,
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

    //Governor's Papers Table
    var table = jQuery("#govpapers-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/govpapers.txt",
        repsonsive: true,
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

    //Kent County Probates
    var table = jQuery("#probateskc-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/probates-kc.txt",
        repsonsive: true,
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

    //Naturalizations
    var table = jQuery("#naturalizations-dt").DataTable({
        ajax:
            "https://archivesfiles.delaware.gov/dpaDataTables/naturalizations-dt.txt",
        repsonsive: true,
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

    //State Reports
    var table = jQuery("#statereports-dt").DataTable({ // TODO: change this on the site's page ...in the headers
        ajax:
            "https://archivesfiles.delaware.gov/dpaDataTables/statereports-dt.txt",
        repsonsive: true,
        columns: [
            { data: "RG" },
            { data: "Pub #" },
            { data: "Box #" },
            { data: "Barcode" },
            { data: "Title" },
            { data: "Author/Compiler" },
            { data: "Date" },
            { data: "Agency" }
        ],
        order: [[0, "asc"]],
        //columnDefs:[{orderable:false, targets:[1]}]
        columnDefs: [{ type: "html-num-fmt", targets: [1] }]
    });

    //DE SAR Table
    var table = jQuery("#deSAR-dt").DataTable({
        ajax: "https://archivesfiles.delaware.gov/dpaDataTables/deSAR.txt",
        repsonsive: true,
        columns: [
            { data: "National #"},
            { data: "Solider Surname"},
            { data: "Solider First Name"},
            { data: "Solider Suffix"},
            { data: "State"},
            { data: "Chapter"},
            { data: "Service"},
            { data: "DE Member #"},
            { data: "DE Surname"},
            { data: "DE First Name"},
            { data: "DE Middle Name"},
            { data: "DE Suffix"}
        ],
        order: [
                [0, "asc"]
            ],
            //columnDefs:[{orderable:false, targets:[1]}]
            columnDefs: [{
                type: "html-num-fmt",
                targets: [1]
            }]
    });

    //Insert another table below
    // ending bracket below here
});