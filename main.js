// url = 'https://www2.agenciatributaria.gob.es/wlpl/ADMF-JDIT/V?C=20115447431&T=e13pA2drMVUkyX/Sm7sxlg==';

// arrayUrl = url.split('=');
// console.log(arrayUrl[1]);



let btnAdd = document.getElementById('btnAdd')
let url = document.getElementById('url');


arrayCodigos = [];

if (arrayCodigos.length > 0) {
    console.log('No hay nada');
}



btnAdd.onclick = function () {
    add(url.value);
    updateTable(arrayCodigos);
    url.value = '';

};




function add(url) {
    arrayUrl = url.split('=');
    arrayUrl = arrayUrl[1].split('&');
    console.log(arrayUrl[0]);
    arrayCodigos.push(arrayUrl[0]);
}

function updateTable() {


// Crea un elemento <table> y un elemento <tbody>
var tabla   = document.getElementById("table");
var tblBody = document.getElementById("tbody");

console.log(tblBody);

// Crea las celdas


  // Crea las hileras de la tabla
  var hilera;
  let num = 1;
  arrayCodigos.forEach(codigo => {
    hilera = document.createElement("tr")
    // var celda1 = document.createElement("td");
    // var textoCelda = document.createTextNode(num);
    // celda1.appendChild(textoCelda);

    var celda2 = document.createElement("td");
    var textoCelda = document.createTextNode(codigo);
    celda2.appendChild(textoCelda);


    // hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    num++;
});


  // agrega la hilera al final de la tabla (al final del elemento tblbody)
   tblBody.appendChild(hilera);





// posiciona el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
// modifica el atributo "border" de la tabla y lo fija a "2";
tabla.setAttribute("border", "2");
}

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join(";"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}