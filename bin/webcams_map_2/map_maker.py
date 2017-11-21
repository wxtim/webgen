# Script to take a list of places and create an open layers map of webcams.
# Aux bits of JS to be used
# @TODO remove from this file and load them.
js_part1 = """var pin_blu = new ol.style.Style({
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
//map pins"""
js_part3 = """
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
"""

js_map_pin_template = """
var mapPin_{} = new ol.Feature({{
  geometry: new ol.geom.Point(ol.proj.fromLonLat([{},{}])),
  name: '{}',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: '{}',
  style: 'iconStyle'
  //
}});
"""
js_map_pin_setstyle = "mapPin_{}.setStyle(pin_blu);\n"



def write_js(places):
    """
    Writes the javascript file with all the details
    Input Variables
    - places list of place descriptor dictionaries
    """
    result = ""
    result += js_part1
    for place in places:
        result += js_map_pin_template.format(place['name'],
                                             place['lon'],
                                             place['lat'],
                                             place['name'],
                                             place['url'])
    result += "//set style on all map pins\n"
    for place in places:
        result += js_map_pin_setstyle.format(place['name'])
    result += """var vectorSource = new ol.source.Vector({features: 
    [
"""
    for place in places:
        result += "     mapPin_{},\n".format(place['name'])
    result += """    ] \n});"""
    result += js_part3
    return result


def to_decimal(sexe):
    """
    Takes a sexegesimal number and returns a decimal number
    """
    try:
        degrees, minutes, direction = sexe.split()
        result = float(degrees) + (float(minutes) / 60)
        if direction == "S" or direction == "W":
            result *= -1
        return result
    except:
        return sexe


def get_data(file_loc):
    """
    opens csv with webcam data and returns list of dictionarionaries
    with site data
    """
    fh = open(file_loc)
    lines = fh.readlines()
    lines = lines[1:]
    places = []
    for line in lines:
        line = {'name': line.split(',')[0],
                'url': line.split(',')[1],
                'lat': to_decimal(line.split(',')[2]),
                'lon': to_decimal(line.split(',')[3])}
        places.append(line)
    return places


def main():
    data = get_data('/home/h02/tpilling/depot/webcams/wc3.csv')


    sample_data = [{'name': 'Waddington',
                   'url': 'http://www-it/M/Production/FSD/Public_Write/Web/Frontline_Web/Airfield_data/tims_airfield_webpages/waddington.html',
                   'lat': 57.2,
                   'lon': -2.2}]
    fh = open("map.js", 'w')
    fh.write(write_js(data))
    fh.close()




if __name__ == "__main__":
    main()
