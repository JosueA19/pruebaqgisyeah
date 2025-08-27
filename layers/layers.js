var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_ZMG_32613_1 = new ol.format.GeoJSON();
var features_ZMG_32613_1 = format_ZMG_32613_1.readFeatures(json_ZMG_32613_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMG_32613_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMG_32613_1.addFeatures(features_ZMG_32613_1);
var lyr_ZMG_32613_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMG_32613_1, 
                style: style_ZMG_32613_1,
                popuplayertitle: 'ZMG_32613',
                interactive: true,
                title: '<img src="styles/legend/ZMG_32613_1.png" /> ZMG_32613'
            });
var format_Zmg_mas_buffer10km_mun_completos_2 = new ol.format.GeoJSON();
var features_Zmg_mas_buffer10km_mun_completos_2 = format_Zmg_mas_buffer10km_mun_completos_2.readFeatures(json_Zmg_mas_buffer10km_mun_completos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zmg_mas_buffer10km_mun_completos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zmg_mas_buffer10km_mun_completos_2.addFeatures(features_Zmg_mas_buffer10km_mun_completos_2);
var lyr_Zmg_mas_buffer10km_mun_completos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zmg_mas_buffer10km_mun_completos_2, 
                style: style_Zmg_mas_buffer10km_mun_completos_2,
                popuplayertitle: 'Zmg_mas_buffer10km_mun_completos',
                interactive: true,
                title: '<img src="styles/legend/Zmg_mas_buffer10km_mun_completos_2.png" /> Zmg_mas_buffer10km_mun_completos'
            });
var format_ZMG_32613_bufer_10km_final_2_3 = new ol.format.GeoJSON();
var features_ZMG_32613_bufer_10km_final_2_3 = format_ZMG_32613_bufer_10km_final_2_3.readFeatures(json_ZMG_32613_bufer_10km_final_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMG_32613_bufer_10km_final_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMG_32613_bufer_10km_final_2_3.addFeatures(features_ZMG_32613_bufer_10km_final_2_3);
var lyr_ZMG_32613_bufer_10km_final_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMG_32613_bufer_10km_final_2_3, 
                style: style_ZMG_32613_bufer_10km_final_2_3,
                popuplayertitle: 'ZMG_32613_bufer_10km_final_2',
                interactive: true,
                title: '<img src="styles/legend/ZMG_32613_bufer_10km_final_2_3.png" /> ZMG_32613_bufer_10km_final_2'
            });

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Presadesantaluciapropio_5 = new ol.format.GeoJSON();
var features_Presadesantaluciapropio_5 = format_Presadesantaluciapropio_5.readFeatures(json_Presadesantaluciapropio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presadesantaluciapropio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Presadesantaluciapropio_5.addFeatures(features_Presadesantaluciapropio_5);
var lyr_Presadesantaluciapropio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Presadesantaluciapropio_5, 
                style: style_Presadesantaluciapropio_5,
                popuplayertitle: 'Presa de santa lucia propio',
                interactive: true,
                title: '<img src="styles/legend/Presadesantaluciapropio_5.png" /> Presa de santa lucia propio'
            });
var format_Centroides_6 = new ol.format.GeoJSON();
var features_Centroides_6 = format_Centroides_6.readFeatures(json_Centroides_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroides_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroides_6.addFeatures(features_Centroides_6);
var lyr_Centroides_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroides_6, 
                style: style_Centroides_6,
                popuplayertitle: 'Centroides',
                interactive: true,
                title: '<img src="styles/legend/Centroides_6.png" /> Centroides'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_ZMG_32613_1.setVisible(true);lyr_Zmg_mas_buffer10km_mun_completos_2.setVisible(true);lyr_ZMG_32613_bufer_10km_final_2_3.setVisible(true);lyr_GoogleSatellite_4.setVisible(true);lyr_Presadesantaluciapropio_5.setVisible(true);lyr_Centroides_6.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_ZMG_32613_1,lyr_Zmg_mas_buffer10km_mun_completos_2,lyr_ZMG_32613_bufer_10km_final_2_3,lyr_GoogleSatellite_4,lyr_Presadesantaluciapropio_5,lyr_Centroides_6];
lyr_ZMG_32613_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_Zmg_mas_buffer10km_mun_completos_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_ZMG_32613_bufer_10km_final_2_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'Area': 'Area', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_Presadesantaluciapropio_5.set('fieldAliases', {'id': 'id', 'Extencion': 'Extencion', 'Perimetro': 'Perimetro', 'Altura': 'Altura', 'Area Ha': 'Area Ha', });
lyr_Centroides_6.set('fieldAliases', {'id': 'id', 'Extencion': 'Extencion', 'Perimetro': 'Perimetro', 'Altura': 'Altura', 'Area Ha': 'Area Ha', 'centroide': 'centroide', 'IMG': 'IMG', 'img_1': 'img_1', 'img_2': 'img_2', });
lyr_ZMG_32613_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_Zmg_mas_buffer10km_mun_completos_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_ZMG_32613_bufer_10km_final_2_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Area': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_Presadesantaluciapropio_5.set('fieldImages', {'id': 'TextEdit', 'Extencion': 'TextEdit', 'Perimetro': 'TextEdit', 'Altura': 'TextEdit', 'Area Ha': 'TextEdit', });
lyr_Centroides_6.set('fieldImages', {'id': 'TextEdit', 'Extencion': 'TextEdit', 'Perimetro': 'TextEdit', 'Altura': 'TextEdit', 'Area Ha': 'TextEdit', 'centroide': 'TextEdit', 'IMG': 'TextEdit', 'img_1': 'TextEdit', 'img_2': 'ExternalResource', });
lyr_ZMG_32613_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'Area': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_Zmg_mas_buffer10km_mun_completos_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'Area': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_ZMG_32613_bufer_10km_final_2_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'Area': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_Presadesantaluciapropio_5.set('fieldLabels', {'id': 'no label', 'Extencion': 'no label', 'Perimetro': 'no label', 'Altura': 'no label', 'Area Ha': 'no label', });
lyr_Centroides_6.set('fieldLabels', {'id': 'inline label - visible with data', 'Extencion': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', 'Altura': 'inline label - visible with data', 'Area Ha': 'inline label - always visible', 'centroide': 'no label', 'IMG': 'no label', 'img_1': 'no label', 'img_2': 'inline label - visible with data', });
lyr_Centroides_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});