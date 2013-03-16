<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	
	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5/leaflet.css" />
	<link rel="stylesheet" href="Optigistix.css" type="text/css" />
	
	<script src="http://cdn.leafletjs.com/leaflet-0.5/leaflet.js"></script>
	
</head>

<body>

	<form onsubmit="Customer_Location(); return false;"> 
 
	<br /><br /> 
	<input type="submit" value="Return next customer's appointment name and time" /> 
	</form> 
	
	<br /><br /> 
	
	<div id="DataTable"></div> 
		
	<div id="map">
		
	</div>
	
</body>

<script>	
	
	var map = L.map('map');
	
	map.locate({setView: true, maxZoom: 16});
		
		L.tileLayer('http://a.tile.cloudmade.com/2abc4943676040dbba53c0bf50ffb05f/1@2x/256/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
		}).addTo(map);
		
		function onMapClick(e) {
			//alert("You're estimated time of arrival is ___?");
			alert(setLatitude);
		}

		map.on('click', onMapClick);
		
		function onLocationFound(e) {
			var radius = e.accuracy / 2;

			L.marker(e.latlng).addTo(map)
				.bindPopup("You are within " + radius + " meters from this point").openPopup();

			L.circle(e.latlng, radius).addTo(map);
		}

		map.on('locationfound', onLocationFound);
		
		function onLocationError(e) {
			alert(e.message);
		}

		map.on('locationerror', onLocationError);
		
		var geojsonFeature = {
			"type": "Feature",
			"properties": {
				"name": "Customer",
				"amenity": "Baseball Stadium",
				"popupContent": "This is where your house is located!"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [setLongitude, setLatitude]
			}
		};
		
		L.geoJson(geojsonFeature).addTo(map);
</script>

<script type="text/javascript"> 
// <![CDATA[ 
// an XMLHttpRequest 
var xhr = null; 
var setLatitude;
var setLongitude;
/* 
* void 
* Color() 
* 
* Gets a Name and Color. 
*/ 
function Customer_Location() 
{ 
// instantiate XMLHttpRequest object 
try 
{ 
xhr = new XMLHttpRequest(); 
} 
catch (e) 
{ 
xhr = new ActiveXObject("Microsoft.XMLHTTP"); 
} 
// handle old browsers 
if (xhr == null) 
{ 
alert("Ajax not supported by your browser!"); 
return; 
} 
 
// construct URL 
var url = "http://00003s1.rcomhost.com/Projects/Optigistix/Serve_Customer_Data.php";
var the_object = {};
// get Campaign Data 
xhr.onreadystatechange = 
function(url) 
{ 
// only handle loaded requests 
if (xhr.readyState == 4) 
{ 
if (xhr.status == 200) 
{ 

var response = JSON.parse(xhr.responseText);

var html = "<table>";
for (var r in response){
      html += "<tr><td>" + response[r].Customer_Name + "</td><td>" + response[r].Appointment_Time + "</td></tr>";
	  setLatitude = response[r].Latitude
	  setLongitude = response[r].Longitude
	  alert(setLatitude)
}
html += "</table>";

document.getElementById("DataTable").innerHTML = html;

} 
else 
alert("Error with Ajax call!"); 
} 
} 
xhr.open("GET", url, true); 
xhr.send(null); 
} 
// ]]> 
</script> 

</html>