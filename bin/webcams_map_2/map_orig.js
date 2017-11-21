var pin_blu = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5,0.5],
    //anchorXUnits: 'pixels',
    //anchorYUnits: 'pixels',
	//color: [255,0,100,1],
    opacity: 0.8,
    src: 'pin_blu.png',
	scale: 0.1
  }))
});
//map pins
var mapPin_waddington = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.2,57.2])),
  name: 'Aberdeen',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www-it/M/Production/FSD/Public_Write/Web/Frontline_Web/Airfield_data/tims_airfield_webpages/aberdeen.html',
  style: 'iconStyle'
  //
});
//set style on all map pins
mapPin_waddington.setStyle(pin_blu);
var vectorSource = new ol.source.Vector({features: [
mapPin_waddington
] });

//Creates a new layer
var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});



var map = new ol.Map({
//
layers: [
  new ol.layer.Tile({
	source: new ol.source.OSM()
  }),
  vectorLayer
],
target: 'map',
view: new ol.View({
  center: ol.proj.fromLonLat([-2.66666666666667,54.5]),
  zoom: 6, 
  //projection: 'EPSG:4326'
}),
logo: [false,'https://www.aerogelicballooning.com/assets/img/balloon-icon.png','href']
});



// Give the variable element the value of 'popup'
var element = document.getElementById('popup');

var popup = new ol.Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false
});

//add overlay to map 
map.addOverlay(popup);

// display popup on click
//.on method uses a string as the event type, followed by a function
map.on('pointermove', function(evt) {
//feature = forEachFeatureatPixel  (pixel, callback function)
  var feature = map.forEachFeatureAtPixel(evt.pixel,
      function(feature, layer) {
        return feature;
      });
	  //if there is a feature - i.e. feature is true
  if (feature) {
  //get information about the feature
    //at the moment this creates destroys any existing features
	//$(element).popover('destroy');
	// $(element).popover('destroy');
	var geometry = feature.getGeometry();
    var coord = geometry.getCoordinates();
    popup.setPosition(coord);
    $(element).popover({
      'placement': 'left',
      'html': true,
      'content': "<div class='popupLabel'> " + feature.get('name') + " </div>",
	  'viewport': 'body',
      'overflow': 'visible',
      'corner-radius': '4px'
    });
	
    $(element).popover('show');
  } else {
    $(element).popover('destroy');
  }
});

map.on('click', function(e) {
  var feature = map.forEachFeatureAtPixel(e.pixel,
      function(feature, layer) {
        return feature;
      });
  if(feature) {
    var geometry = feature.getGeometry();
    var coord = geometry.getCoordinates();
	parent.document.getElementsByName('content')[0].src = feature.get('link');
    //window.open(feature.get('link'). 'content');
	//top.frames['content'].src = feature.get('link');
	//parent.document.getElementById('content').src = feature.get('link');
  }
    
});

