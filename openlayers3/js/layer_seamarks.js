var SeaMarks = SeaMarks || {};

SeaMarks.queryKey = "ls";

SeaMarks.registerLayers = function() {
    var key = "seamarks";
    var show = evaluateLayerVisibility(SeaMarks.queryKey, key, true);
    var layer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'http://t1.openseamap.org/seamark/{z}/{x}/{y}.png'
        }),
        name: "Sea marks",
        visible: show,
    });
    addCookieUpdater(layer, key);
    map.addLayer(layer);
};
