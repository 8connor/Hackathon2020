
window.addEventListener('load', function () {
  var sideNavInstances = M.Sidenav.init(document.querySelectorAll('.sidenav'));

  var modalInstances = M.Modal.init(document.querySelectorAll('.modal'));

  // This example displays a marker at the center of Australia.
  // When the user clicks the marker, an info window opens.


  fetch("/api/trash").then(response => response.json())
    .then(function (data) {

      console.log(data)



      //centering of map
      var knoxville = {
        lat: 35.9606,
        lng: -83.9207
      };

      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: knoxville
      });

      //locations of recycling places
      var magnolia = {
        lat: 35.997534,
        lng: -83.881276
      };

      var moody = {
        lat: 35.937327,
        lng: -83.909510
      };

      var western = {
        lat: 35.971865,
        lng: -83.988568
      };

      var parkvillage = {
        lat: 35.921974,
        lng: -84.086662
      };

      var willow = {
        lat: 35.970315,
        lng: -83.917211
      };
      ``
      //content bubbles of recycling places
      var contentString1 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Magnolia & Alice</h1>' +
        '<div id="bodyContent">' +
        "<p>Aluminum - 460 lbs; Plastics - 8,840 lbs; Glass - 15,680 lbs; Mixed Paper - 12,800 lbs; " +
        "Cardboard - 10,720 lbs; Steel/Tin - 520 lbs; Newspaper - 3,440 lbs. <br><br> " +
        "<b>Total Score --- 7,351 pts.</b><br><br>" +
        "<b>HIGHEST COMMUNITY SCORE</b>"
      "</div>" +
        "</div>";

      var contentString2 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">225 Moody</h1>' +
        '<div id="bodyContent">' +
        "<p>Aluminum - 300 lbs; Plastics - 4,957 lbs; Glass - 6,300 lbs; Mixed Paper - 6,360 lbs; " +
        "Cardboard - 5,455 lbs; Steel/Tin - 760 lbs; Newspaper - 11,700 lbs. <br><br> " +
        "<b>Total Score --- 4,063 pts.</b><br><br>" +
        "</div>" +
        "</div>";

      var contentString3 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">4440 Western Avenue</h1>' +
        '<div id="bodyContent">' +
        "<p>Aluminum - 680 lbs; Plastics - 5,540 lbs; Glass - 14,520 lbs; Mixed Paper - 10,420 lbs; " +
        "Cardboard - 9,200 lbs; Steel/Tin - 1,200 lbs; Newspaper - 0 lbs. <br><br> " +
        "<b>Total Score --- 5,952 pts.</b><br><br>" +
        "</div>" +
        "</div>";

      var contentString4 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">341 Park Village</h1>' +
        '<div id="bodyContent">' +
        "<p>Aluminum - 1,940 lbs; <br><br>" +
        "<b>Total Score --- 291 pts.</b><br><br>" +
        "</div>" +
        "</div>";

      var contentString5 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">227 Willow Avenue</h1>' +
        '<div id="bodyContent">' +
        "<b>Total Score --- 0 pts.</b><br><br>" +
        "<p><b>Point System:</b><br>Aluminum: 3 pts per 20 lbs; Plastics: 5 pts per 20 lbs; Glass: 4 pts per 20 lbs; " +
        "Mixed Paper: 1 pt per 20 lbs; Cardboard: 2 pts per 20 lbs; Steel/Tin: 2 pts per 20 lbs; Newspaper: 1 pt per 20 lbs." +
        "<br><br>***If community amount is not divisible by 20, result is rounded down.***"
      "</div>" +
        "</div>";




      //code to display bubbles when clicking on markers
      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });

      var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });

      var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
      });

      var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
      });

      var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
      });



      //puts markers on map
      var marker1 = new google.maps.Marker({
        position: magnolia,
        map: map,
        title: "Magnolia & Alice"
      });


      var marker2 = new google.maps.Marker({
        position: moody,
        map: map,
        title: "225 Moody"
      });

      var marker3 = new google.maps.Marker({
        position: western,
        map: map,
        title: "4440 Western Avenue"
      });

      var marker4 = new google.maps.Marker({
        position: parkvillage,
        map: map,
        title: "341 Park Village"
      });

      var marker5 = new google.maps.Marker({
        position: willow,
        map: map,
        title: "227 Willow Avenue"
      });



      //code to activate bubble of each marker when clicked
      marker1.addListener("click", function () {
        infowindow1.open(map, marker1);
      });

      marker2.addListener("click", function () {
        infowindow2.open(map, marker2);
      });

      marker3.addListener("click", function () {
        infowindow3.open(map, marker3);
      });

      marker4.addListener("click", function () {
        infowindow4.open(map, marker4);
      });

      marker5.addListener("click", function () {
        infowindow5.open(map, marker5);
      });

    }
    );

});
