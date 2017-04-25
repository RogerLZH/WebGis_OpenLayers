window.onload = function (){
	var map = new ol.Map({
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM
			})
		],
		target: 'map',
		view :new ol.View({
			center: [12000000, 4000000],
			minZoom: 2,
			zoom:3
		})
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
				// alert($('#SearchText').val());
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
      data : {value:'value'},
      success : function(Result) {
          alert("123")
      },
      error : function(xhr, status, errMsg) {
          alert("456");
      }
  	});
	}
}

