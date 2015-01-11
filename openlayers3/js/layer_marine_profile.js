var MarineProfile = MarineProfile || {};

MarineProfile.queryKey = "lm";
MarineProfile.queryKeyShading = "lms";
MarineProfile.queryKeyProfile = "lmp";

MarineProfile.registerLayers = function() {
    // TODO how can we make these layers wrap around the world?
    var keyShading = 'marine_shading';
    var showShading = evaluateLayerVisibility(MarineProfile.queryKeyShading,
                                              keyShading, true);
    var layer_shading = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http:///osm.franken.de:8080/geoserver/wms',
            params: {layers: 'gebco:deepshade_2014', format:"image/png", transparent:"true"},
        }),
        name: "Deepwater shading",
        opacity: 0.5,
        minResolution: 38.22,
        extent: ol.proj.transformExtent([-180, -85, 180, 85], 'EPSG:4326', 'EPSG:3857'),
        visible: showShading,
    });
    addCookieUpdater(layer_shading, keyShading);
 
    var keyProfile = 'marine_profile';
    var showProfile = evaluateLayerVisibility(MarineProfile.queryKeyProfile,
                                              keyProfile, true);
    var layer_profile = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://osm.franken.de:8080/geoserver/wms',
            params: {layers: 'gebco_new', format: "image/png"},
        }),
        name: "Profile",
        opacity: 0.5,
        extent: ol.proj.transformExtent([-180, -85, 180, 85], 'EPSG:4326', 'EPSG:3857'),
        visible: showProfile,
    });
    addCookieUpdater(layer_profile, keyProfile);
    var key = 'marine'
    var show= evaluateLayerVisibility(MarineProfile.queryKey, key, true);
    var group = new ol.layer.Group({
        layers: [layer_profile, layer_shading],
        name: "Marine Profile",
        visible: show,
    });
    addCookieUpdater(group, key);
    map.addLayer(group);
};
