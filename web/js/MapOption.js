// function addPolygon(){
// 	var polygonFeature = new ol.Feature(
// 		new ol.geom.Polygon()
// 	);
// 	map.addLayer(vector);
// }
//
// function addPoint(){
// 	var PointFeature = new ol.Feature(
// 		new ol.geom.Point()
// 	);
// 	map.addLayer(vector);
// }

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

var createLabelStyle = function (feature) {
    return new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 60],
            anchorOrigin: 'top-right',
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            offsetOrigin: 'top-right',
            opacity: 0.75,  //透明度
            src: '../images/label/icon.png' //图标的url
        }),
        text: new ol.style.Text({
            textAlign: 'center', //位置
            textBaseline: 'middle', //基准线
            font: 'normal 14px 微软雅黑',  //文字样式
            text: feature.get('name'),  //文本内容
            fill: new ol.style.Fill({ color: '#aa3300' }), //文本填充样式（即文字颜色）
            stroke: new ol.style.Stroke({ color: '#ffcc33', width: 2 })
        })
    });
}


// var style =  new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 60],
//         anchorOrigin: 'top-right',
//         anchorXUnits: 'fraction',
//         anchorYUnits: 'pixels',
//         offsetOrigin: 'top-right',
//         opacity: 0.75,  //透明度
//         src: '../images/label/icon.png' //图标的url
//     }),
//     text: new ol.style.Text({
//         textAlign: 'center', //位置
//         textBaseline: 'middle', //基准线
//         font: 'normal 14px 微软雅黑',  //文字样式
//         fill: new ol.style.Fill({ color: '#aa3300' }), //文本填充样式（即文字颜色）
//         stroke: new ol.style.Stroke({ color: '#ffcc33', width: 2 })
//     })
// });

function AddLabel(Result) {
    var coordinate = ol.proj.fromLonLat([Result.Lng, Result.Lat]);
    var newFeature = new ol.Feature({
        geometry: new ol.geom.Point(coordinate),//几何信息
        name: Result.poi_Title  //名称属性
    });
    newFeature.setStyle(createLabelStyle(newFeature));//设置要素的样式
    source.addFeature(newFeature);//将新要素添加到数据源中
}