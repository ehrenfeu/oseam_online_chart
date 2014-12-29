var Stamen = Stamen || {};

Stamen.registerLayers = function() {
    var layer_base = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'watercolor'
        }),
        name: 'Watercolor',
    });
    
    var layer_labels = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain-labels'
        }),
        name: 'Labels (U.S. only)',
    });
    var group = new ol.layer.Group({
        layers: [layer_base, layer_labels],
        name: "Watercolor",
        visible: false
    });
    group.isBaseLayer = true;
    map.addLayer(group);
};
