var wms_layers = [];


    var projection_ORTOFOTOMAPA_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_ORTOFOTOMAPA_0 = projection_ORTOFOTOMAPA_0.getExtent();
    var size_ORTOFOTOMAPA_0 = ol.extent.getWidth(projectionExtent_ORTOFOTOMAPA_0) / 256;
    var resolutions_ORTOFOTOMAPA_0 = new Array(14);
    var matrixIds_ORTOFOTOMAPA_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ORTOFOTOMAPA_0[z] = size_ORTOFOTOMAPA_0 / Math.pow(2, z);
        matrixIds_ORTOFOTOMAPA_0[z] = z;
    }
    var lyr_ORTOFOTOMAPA_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/HighResolution?request=GetCapabilities&service=wmts",
    attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_ORTOFOTOMAPA_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ORTOFOTOMAPA_0),
                resolutions: resolutions_ORTOFOTOMAPA_0,
                matrixIds: matrixIds_ORTOFOTOMAPA_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "ORTOFOTOMAPA",
                            opacity: 1.0,
                            
                            
                          });
var format_latarnie_1 = new ol.format.GeoJSON();
var features_latarnie_1 = format_latarnie_1.readFeatures(json_latarnie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_latarnie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_latarnie_1.addFeatures(features_latarnie_1);
var lyr_latarnie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_latarnie_1, 
                style: style_latarnie_1,
                interactive: true,
                title: '<img src="styles/legend/latarnie_1.png" /> latarnie'
            });
var format_1s22_zenit_2 = new ol.format.GeoJSON();
var features_1s22_zenit_2 = format_1s22_zenit_2.readFeatures(json_1s22_zenit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1s22_zenit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1s22_zenit_2.addFeatures(features_1s22_zenit_2);
var lyr_1s22_zenit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1s22_zenit_2, 
                style: style_1s22_zenit_2,
                interactive: true,
    title: '1)s22_zenit<br />\
    <img src="styles/legend/1s22_zenit_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/1s22_zenit_2_1.png" /> 1 - 2<br />\
    <img src="styles/legend/1s22_zenit_2_2.png" /> 2 - 3<br />\
    <img src="styles/legend/1s22_zenit_2_3.png" /> 3 - 4<br />\
    <img src="styles/legend/1s22_zenit_2_4.png" /> 4 - 5<br />\
    <img src="styles/legend/1s22_zenit_2_5.png" /> 5 - 6<br />\
    <img src="styles/legend/1s22_zenit_2_6.png" /> 6 - 7<br />\
    <img src="styles/legend/1s22_zenit_2_7.png" /> 7 - 8<br />\
    <img src="styles/legend/1s22_zenit_2_8.png" /> 8 - 9<br />\
    <img src="styles/legend/1s22_zenit_2_9.png" /> 9 - 10<br />\
    <img src="styles/legend/1s22_zenit_2_10.png" /> 10 - 11<br />\
    <img src="styles/legend/1s22_zenit_2_11.png" /> 11 - 12<br />\
    <img src="styles/legend/1s22_zenit_2_12.png" /> 12 - 13<br />\
    <img src="styles/legend/1s22_zenit_2_13.png" /> 13 - 14<br />\
    <img src="styles/legend/1s22_zenit_2_14.png" /> 14 - 15<br />\
    <img src="styles/legend/1s22_zenit_2_15.png" /> 15 - 16<br />\
    <img src="styles/legend/1s22_zenit_2_16.png" /> 16 - 17<br />\
    <img src="styles/legend/1s22_zenit_2_17.png" /> 17 - 18<br />\
    <img src="styles/legend/1s22_zenit_2_18.png" /> 18 - 19<br />\
    <img src="styles/legend/1s22_zenit_2_19.png" /> 19 - 20<br />\
    <img src="styles/legend/1s22_zenit_2_20.png" /> 20 - 21<br />\
    <img src="styles/legend/1s22_zenit_2_21.png" /> 21 - 22<br />\
    <img src="styles/legend/1s22_zenit_2_22.png" /> 22 - 23<br />\
    <img src="styles/legend/1s22_zenit_2_23.png" /> 23 - 24<br />\
    <img src="styles/legend/1s22_zenit_2_24.png" /> 24 - 25<br />\
    <img src="styles/legend/1s22_zenit_2_25.png" /> 25 - 26<br />\
    <img src="styles/legend/1s22_zenit_2_26.png" /> 26 - 27<br />\
    <img src="styles/legend/1s22_zenit_2_27.png" /> 27 - 28<br />\
    <img src="styles/legend/1s22_zenit_2_28.png" /> 28 - 29<br />\
    <img src="styles/legend/1s22_zenit_2_29.png" /> 29 - 30<br />\
    <img src="styles/legend/1s22_zenit_2_30.png" /> 30 - 31<br />\
    <img src="styles/legend/1s22_zenit_2_31.png" /> 31 - 32<br />\
    <img src="styles/legend/1s22_zenit_2_32.png" /> 32 - 33<br />\
    <img src="styles/legend/1s22_zenit_2_33.png" /> 33 - 34<br />\
    <img src="styles/legend/1s22_zenit_2_34.png" /> 34 - 35<br />\
    <img src="styles/legend/1s22_zenit_2_35.png" /> 35 - 36<br />\
    <img src="styles/legend/1s22_zenit_2_36.png" /> 36 - 37<br />\
    <img src="styles/legend/1s22_zenit_2_37.png" /> 37 - 38<br />\
    <img src="styles/legend/1s22_zenit_2_38.png" /> 38 - 39<br />\
    <img src="styles/legend/1s22_zenit_2_39.png" /> 39 - 40<br />\
    <img src="styles/legend/1s22_zenit_2_40.png" /> 40 - 41<br />\
    <img src="styles/legend/1s22_zenit_2_41.png" /> 41 - 42<br />\
    <img src="styles/legend/1s22_zenit_2_42.png" /> 42 - 43<br />\
    <img src="styles/legend/1s22_zenit_2_43.png" /> 43 - 44<br />\
    <img src="styles/legend/1s22_zenit_2_44.png" /> 44 - 45<br />\
    <img src="styles/legend/1s22_zenit_2_45.png" /> 45 - 46<br />\
    <img src="styles/legend/1s22_zenit_2_46.png" /> 46 - 47<br />\
    <img src="styles/legend/1s22_zenit_2_47.png" /> 47 - 48<br />\
    <img src="styles/legend/1s22_zenit_2_48.png" /> 48 - 49<br />\
    <img src="styles/legend/1s22_zenit_2_49.png" /> 49 - 50<br />'
        });

lyr_ORTOFOTOMAPA_0.setVisible(true);lyr_latarnie_1.setVisible(true);lyr_1s22_zenit_2.setVisible(true);
var layersList = [lyr_ORTOFOTOMAPA_0,lyr_latarnie_1,lyr_1s22_zenit_2];
lyr_latarnie_1.set('fieldAliases', {'id': 'id', });
lyr_1s22_zenit_2.set('fieldAliases', {'seconds_elapsed': 'seconds_elapsed', 'longitude': 'longitude', 'latitude': 'latitude', 'lux': 'lux', });
lyr_latarnie_1.set('fieldImages', {'id': 'TextEdit', });
lyr_1s22_zenit_2.set('fieldImages', {'seconds_elapsed': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'lux': 'TextEdit', });
lyr_latarnie_1.set('fieldLabels', {'id': 'header label', });
lyr_1s22_zenit_2.set('fieldLabels', {'seconds_elapsed': 'header label', 'longitude': 'header label', 'latitude': 'header label', 'lux': 'header label', });
lyr_1s22_zenit_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});