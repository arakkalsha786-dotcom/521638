var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kadulund_dissolve_1 = new ol.format.GeoJSON();
var features_kadulund_dissolve_1 = format_kadulund_dissolve_1.readFeatures(json_kadulund_dissolve_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kadulund_dissolve_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kadulund_dissolve_1.addFeatures(features_kadulund_dissolve_1);
var lyr_kadulund_dissolve_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kadulund_dissolve_1, 
                style: style_kadulund_dissolve_1,
                popuplayertitle: 'kadulund_dissolve',
                interactive: false,
                title: '<img src="styles/legend/kadulund_dissolve_1.png" /> kadulund_dissolve'
            });
var format_geomorphology_kadlundi_2 = new ol.format.GeoJSON();
var features_geomorphology_kadlundi_2 = format_geomorphology_kadlundi_2.readFeatures(json_geomorphology_kadlundi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphology_kadlundi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphology_kadlundi_2.addFeatures(features_geomorphology_kadlundi_2);
var lyr_geomorphology_kadlundi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphology_kadlundi_2, 
                style: style_geomorphology_kadlundi_2,
                popuplayertitle: 'geomorphology_kadlundi',
                interactive: true,
                title: '<img src="styles/legend/geomorphology_kadlundi_2.png" /> geomorphology_kadlundi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_kadulund_dissolve_1.setVisible(true);lyr_geomorphology_kadlundi_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kadulund_dissolve_1,lyr_geomorphology_kadlundi_2];
lyr_kadulund_dissolve_1.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'length': 'length', });
lyr_geomorphology_kadlundi_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_kadulund_dissolve_1.set('fieldImages', {'fid': '', 'ORDER1': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'row_index': '', 'col_index': '', 'length': '', });
lyr_geomorphology_kadlundi_2.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_kadulund_dissolve_1.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'length': 'no label', });
lyr_geomorphology_kadlundi_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_geomorphology_kadlundi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});