var map;
var view = new ol.View({
	center: [12000000, 4000000],
	minZoom: 3,
	zoom: 4
})
window.onload = function (){
	map = new ol.Map({
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM
			})
		],
		target: 'map',
		view : view
	});

	var zoomslider = new ol.control.ZoomSlider();
	map.addControl(zoomslider);

	var zoomToExtent = new ol.control.ZoomToExtent({
		extent:[
			13100000, 4290000,
			13200000, 5210000
		]
	});
	map.addControl(zoomToExtent);
}


$(document).ready(
	function (){
		$("#SearchText").keydown(function(event){
			if(event.keyCode == 13){
				Search();
			}
		})
	}
)


function Search(){
	var value = $("#SearchText").val();
	if(value != null){
    $.ajax({
      type : "post",
      url : "servlet/DBconnection",
      dataType : "text",
      data : {
      	"Search":value
	  },
      success : function(Result) {
		  alert(Result.toString());
		  source.clear();
          $.each(eval(Result), function (index, info)
		  {
		  	if(index < 20){
                AddLabel(info);
			}
          	// alert(index+"-----"+info.poi_Title);
          	if(index == 0){
				view.setCenter(ol.proj.fromLonLat([info.Lng, info.Lat]));
			}
		  })
		  map.addLayer(vector);
      },
      error : function(xhr, status, errMsg) {
      }
  	});
	}
}

