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
var mapPin_Aberdeen = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.18333333333,57.25])),
  name: 'Aberdeen',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.aberdeencity.gov.uk/web/images/webcam/harbour_00001.jpg',
  style: 'iconStyle'
  //
});

var mapPin_Aberystwyth = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.13333333333,52.6833333333])),
  name: 'Aberystwyth',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'https://www.webcamgalore.com/webcam/United-Kingdom/Aberystwyth/5106.html',
  style: 'iconStyle'
  //
});

var mapPin_Ambleside = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.6,54.7166666667])),
  name: 'Ambleside',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.climbers-shop.com/web-cam.aspx',
  style: 'iconStyle'
  //
});

var mapPin_Bayles = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.45,54.7833333333])),
  name: 'Bayles',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.cybermoor.org/travel/webcams',
  style: 'iconStyle'
  //
});

var mapPin_Berwick = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.03333333333,55.7666666667])),
  name: 'Berwick',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://lethamshank.co.uk/met/localwx.htm?page=wx_cam',
  style: 'iconStyle'
  //
});

var mapPin_Brampton = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.5,54.6])),
  name: 'Brampton',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.bramptonweather.co.uk/webcam.html',
  style: 'iconStyle'
  //
});

var mapPin_Bude = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.53333333333,50.8166666667])),
  name: 'Bude',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.budewebcam.co.uk/surf.htm',
  style: 'iconStyle'
  //
});

var mapPin_Burnham_overy_Staithe = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([0.733333333333,52.95])),
  name: 'Burnham_overy_Staithe',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://news.bbc.co.uk/local/norfolk/hi/people_and_places/nature/newsid_8420000/8420884.stm',
  style: 'iconStyle'
  //
});

var mapPin_Ogwen_mountain_rescue = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.983215,53.127039])),
  name: 'Ogwen_mountain_rescue',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'https://ovmro.uk/webcam/02.jpg',
  style: 'iconStyle'
  //
});

var mapPin_Croft_on_Tees = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-1.91666666667,54.8])),
  name: 'Croft_on_Tees',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.croftwireless.co.uk/weather/',
  style: 'iconStyle'
  //
});

var mapPin_Dunoon = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.53333333333,56.5833333333])),
  name: 'Dunoon',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.argyll-bute.gov.uk/newsroom/currentaffairs/dunooncamarticle',
  style: 'iconStyle'
  //
});

var mapPin_Durham = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-1.56666666667,54.7666666667])),
  name: 'Durham',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.dur.ac.uk/physics.astrolab/webcam2.html',
  style: 'iconStyle'
  //
});

var mapPin_Falkirk = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.31666666667,56.0])),
  name: 'Falkirk',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.scotweather.co.uk/?page=webcam',
  style: 'iconStyle'
  //
});

var mapPin_Glencoe = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.1,56.6666666667])),
  name: 'Glencoe',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.glencoemountain.co.uk/webcams.html',
  style: 'iconStyle'
  //
});

var mapPin_Glenshee = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.43333333333,56.8])),
  name: 'Glenshee',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.webcam-ski.com/webcams/interfaces/glenshee/interface.php?pk_interface=278&m=images&r=panoramique',
  style: 'iconStyle'
  //
});

var mapPin_Greenlaw = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.46666666667,55.7])),
  name: 'Greenlaw',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.bordersweather.co.uk/wxcam.php',
  style: 'iconStyle'
  //
});

var mapPin_Kinlochbervie = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.08333333333,58.7666666667])),
  name: 'Kinlochbervie',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.kinlochbervie.info/index2.htm',
  style: 'iconStyle'
  //
});

var mapPin_Ingleborough = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.4,54.1666666667])),
  name: 'Ingleborough',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.ingleboroughwebcam.co.uk/',
  style: 'iconStyle'
  //
});

var mapPin_Inverurie = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.38333333333,57.2666666667])),
  name: 'Inverurie',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.ardgrain.com/inverurie-webcam',
  style: 'iconStyle'
  //
});

var mapPin_Isle_of_Lewis = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-6.26666666667,58.5])),
  name: 'Isle_of_Lewis',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.eoropaidh.co.uk/webcam.htm',
  style: 'iconStyle'
  //
});

var mapPin_Isle_of_Mull = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.9,56.5166666667])),
  name: 'Isle_of_Mull',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.jkaydesign.co.uk/netcampage.html',
  style: 'iconStyle'
  //
});

var mapPin_Isle_of_Skye = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.73333333333,57.2666666667])),
  name: 'Isle_of_Skye',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://trafficscotland.org/lev/index.aspx?mi=12&cam=127',
  style: 'iconStyle'
  //
});

var mapPin_Lochgelly_Fife = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.51666666667,56.2166666667])),
  name: 'Lochgelly_Fife',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.fifeweather.co.uk/weathercam.php',
  style: 'iconStyle'
  //
});

var mapPin_Mablethorpe = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.25,52.3333333333])),
  name: 'Mablethorpe',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.extremehorizon.com/surf-shop/mablethorpe_webcam.html',
  style: 'iconStyle'
  //
});

var mapPin_Near_Buxton = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.0,53.2333333333])),
  name: 'Near_Buxton',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.maccinfo.com/cat/',
  style: 'iconStyle'
  //
});

var mapPin_Nenthead = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.33333333333,54.7833333333])),
  name: 'Nenthead',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.bbc.co.uk/cumbria/content/webcams/nenthead_webcam.shtml',
  style: 'iconStyle'
  //
});

var mapPin_New_Deer = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.2,57.5])),
  name: 'New_Deer',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.ardgrain.com/new-deer-webcam',
  style: 'iconStyle'
  //
});

var mapPin_Newquay = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.06666666667,50.4])),
  name: 'Newquay',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.newquayweather.com/',
  style: 'iconStyle'
  //
});

var mapPin_Ousdale_Caithness = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.58333333333,58.15])),
  name: 'Ousdale_Caithness',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://trafficscotland.org/lev/index.aspx?mi=9&cam=87',
  style: 'iconStyle'
  //
});

var mapPin_Overscaig = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.68333333333,58.1666666667])),
  name: 'Overscaig',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.overscaighotel.co.uk/WebCam/index.shtml',
  style: 'iconStyle'
  //
});

var mapPin_Peel = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.68333333333,54.2166666667])),
  name: 'Peel',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.dotet.co.uk/index.php?type=webcam&id=2',
  style: 'iconStyle'
  //
});

var mapPin_Redcar = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-1.11666666667,55.0333333333])),
  name: 'Redcar',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.redcarlifeboat.org.uk/Pages/album/webcam.html',
  style: 'iconStyle'
  //
});

var mapPin_Robin_Hoods_Bay = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.883333333333,54.7166666667])),
  name: 'Robin_Hoods_Bay',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.rhbmesh.net/rhbmesh_webcam2.php',
  style: 'iconStyle'
  //
});

var mapPin_Rhosneigr = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.51666666667,53.2166666667])),
  name: 'Rhosneigr',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.funsportonline.co.uk/default.aspx',
  style: 'iconStyle'
  //
});

var mapPin_Sabhal_mor_Ostaig_Isle_of_Skye = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-5.88333333333,57.0833333333])),
  name: 'Sabhal_mor_Ostaig_Isle_of_Skye',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.blaven.com/webcamarchive.aspx?webcam=01&date=',
  style: 'iconStyle'
  //
});

var mapPin_Scrabster = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.55,58.6])),
  name: 'Scrabster',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.tugmistress.co.uk/index.php?option=com_wrapper&view=wrapper&Itemid=5',
  style: 'iconStyle'
  //
});

var mapPin_Skiddaw = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.13333333333,54.6333333333])),
  name: 'Skiddaw',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.georgefisher.co.uk/pages/webcam.asp',
  style: 'iconStyle'
  //
});

var mapPin_Snaefell = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-4.45,54.25])),
  name: 'Snaefell',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.dotet.co.uk/index.php?type=webcam&id=3',
  style: 'iconStyle'
  //
});

var mapPin_Sutton_Bank = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-1.21666666667,54.2333333333])),
  name: 'Sutton_Bank',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'https://www.ygc.co.uk/websitecamera/',
  style: 'iconStyle'
  //
});

var mapPin_Swaledale = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.024851,54.379124])),
  name: 'Swaledale',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.swaledaleyorkshire.com/page9.htm',
  style: 'iconStyle'
  //
});

var mapPin_Thatcham = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-1.25,51.4])),
  name: 'Thatcham',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.thatcham-weather.info/',
  style: 'iconStyle'
  //
});

var mapPin_Torquay = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.53333333333,50.4666666667])),
  name: 'Torquay',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.bbc.co.uk/devon/content/webcams/torquay_harbour_webcam.shtml',
  style: 'iconStyle'
  //
});

var mapPin_Whitby = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.616666666667,52.4833333333])),
  name: 'Whitby',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.whitbywebcam.co.uk/',
  style: 'iconStyle'
  //
});

var mapPin_Whitehaven = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.58333333333,54.5333333333])),
  name: 'Whitehaven',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://www.bbc.co.uk/cumbria/content/webcams/whitehaven_beacon1_webcam.shtml',
  style: 'iconStyle'
  //
});

var mapPin_Theatre_severn = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-2.757498,52.710511])),
  name: 'Theatre_severn',
  image: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  link: 'http://webcams.static.shropshire.gov.uk/general/QL00001.jpg',
  style: 'iconStyle'
  //
});
//set style on all map pins
mapPin_Aberdeen.setStyle(pin_blu);
mapPin_Aberystwyth.setStyle(pin_blu);
mapPin_Ambleside.setStyle(pin_blu);
mapPin_Bayles.setStyle(pin_blu);
mapPin_Berwick.setStyle(pin_blu);
mapPin_Brampton.setStyle(pin_blu);
mapPin_Bude.setStyle(pin_blu);
mapPin_Burnham_overy_Staithe.setStyle(pin_blu);
mapPin_Ogwen_mountain_rescue.setStyle(pin_blu);
mapPin_Croft_on_Tees.setStyle(pin_blu);
mapPin_Dunoon.setStyle(pin_blu);
mapPin_Durham.setStyle(pin_blu);
mapPin_Falkirk.setStyle(pin_blu);
mapPin_Glencoe.setStyle(pin_blu);
mapPin_Glenshee.setStyle(pin_blu);
mapPin_Greenlaw.setStyle(pin_blu);
mapPin_Kinlochbervie.setStyle(pin_blu);
mapPin_Ingleborough.setStyle(pin_blu);
mapPin_Inverurie.setStyle(pin_blu);
mapPin_Isle_of_Lewis.setStyle(pin_blu);
mapPin_Isle_of_Mull.setStyle(pin_blu);
mapPin_Isle_of_Skye.setStyle(pin_blu);
mapPin_Lochgelly_Fife.setStyle(pin_blu);
mapPin_Mablethorpe.setStyle(pin_blu);
mapPin_Near_Buxton.setStyle(pin_blu);
mapPin_Nenthead.setStyle(pin_blu);
mapPin_New_Deer.setStyle(pin_blu);
mapPin_Newquay.setStyle(pin_blu);
mapPin_Ousdale_Caithness.setStyle(pin_blu);
mapPin_Overscaig.setStyle(pin_blu);
mapPin_Peel.setStyle(pin_blu);
mapPin_Redcar.setStyle(pin_blu);
mapPin_Robin_Hoods_Bay.setStyle(pin_blu);
mapPin_Rhosneigr.setStyle(pin_blu);
mapPin_Sabhal_mor_Ostaig_Isle_of_Skye.setStyle(pin_blu);
mapPin_Scrabster.setStyle(pin_blu);
mapPin_Skiddaw.setStyle(pin_blu);
mapPin_Snaefell.setStyle(pin_blu);
mapPin_Sutton_Bank.setStyle(pin_blu);
mapPin_Swaledale.setStyle(pin_blu);
mapPin_Thatcham.setStyle(pin_blu);
mapPin_Torquay.setStyle(pin_blu);
mapPin_Whitby.setStyle(pin_blu);
mapPin_Whitehaven.setStyle(pin_blu);
mapPin_Theatre_severn.setStyle(pin_blu);
var vectorSource = new ol.source.Vector({features: 
    [
     mapPin_Aberdeen,
     mapPin_Aberystwyth,
     mapPin_Ambleside,
     mapPin_Bayles,
     mapPin_Berwick,
     mapPin_Brampton,
     mapPin_Bude,
     mapPin_Burnham_overy_Staithe,
     mapPin_Ogwen_mountain_rescue,
     mapPin_Croft_on_Tees,
     mapPin_Dunoon,
     mapPin_Durham,
     mapPin_Falkirk,
     mapPin_Glencoe,
     mapPin_Glenshee,
     mapPin_Greenlaw,
     mapPin_Kinlochbervie,
     mapPin_Ingleborough,
     mapPin_Inverurie,
     mapPin_Isle_of_Lewis,
     mapPin_Isle_of_Mull,
     mapPin_Isle_of_Skye,
     mapPin_Lochgelly_Fife,
     mapPin_Mablethorpe,
     mapPin_Near_Buxton,
     mapPin_Nenthead,
     mapPin_New_Deer,
     mapPin_Newquay,
     mapPin_Ousdale_Caithness,
     mapPin_Overscaig,
     mapPin_Peel,
     mapPin_Redcar,
     mapPin_Robin_Hoods_Bay,
     mapPin_Rhosneigr,
     mapPin_Sabhal_mor_Ostaig_Isle_of_Skye,
     mapPin_Scrabster,
     mapPin_Skiddaw,
     mapPin_Snaefell,
     mapPin_Sutton_Bank,
     mapPin_Swaledale,
     mapPin_Thatcham,
     mapPin_Torquay,
     mapPin_Whitby,
     mapPin_Whitehaven,
     mapPin_Theatre_severn,
    ] 
});
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
