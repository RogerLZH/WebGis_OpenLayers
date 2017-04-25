function addPolygon(){
	var polygonFeature = new ol.Feature(
		new ol.geom.Polygon()
	);
	map.addLayer(vector);
}

function addPoint(){
	var PointFeature = new ol.Feature(
		new ol.geom.Point()
	);
	map.addLayer(vector);
}

var source = new ol.source.Vector({
	feature: []
});

var vector = new ol.layer.Vector({
  source: source,
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2
    }),
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
          color: '#ffcc33'
      })
    })
  })
});