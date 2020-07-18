document.addEventListener('DOMContentLoaded', function () {
    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavInstances = M.Sidenav.init(sideNavElems);
    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems);
    
    
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }

    fetch("/api/trash").then(response => response.json())
        .then(function (data) {
            var newDiv = document.createElement("div");
            var newText = document.getElementById("infoTable").innerHTML = "Trash date: " + data[0].date + " class: " + data[1].class + " source: " + data[2].source

            newDiv.appendChild(newText);

            var currentDiv = document.getElementById("infoTable");


            console.log(data)
        }
    );
});


