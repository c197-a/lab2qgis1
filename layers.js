var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Яндекс Спутник',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.927.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway1_3 = new ol.format.GeoJSON();
var features_highway1_3 = format_highway1_3.readFeatures(json_highway1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway1_3.addFeatures(features_highway1_3);
var lyr_highway1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway1_3, 
                style: style_highway1_3,
                popuplayertitle: 'highway1',
                interactive: false,
                title: '<img src="styles/legend/highway1_3.png" /> highway1'
            });

lyr__0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway1_3.setVisible(true);
var layersList = [lyr__0,lyr_OSMStandard_1,lyr_building_2,lyr_highway1_3];
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'descriptio': 'descriptio', 'roof_orien': 'roof_orien', 'roof_mater': 'roof_mater', 'roof_level': 'roof_level', 'roof_colou': 'roof_colou', 'building_m': 'building_m', 'building_c': 'building_c', 'man_made': 'man_made', 'addr_place': 'addr_place', 'religion': 'religion', 'denominati': 'denominati', 'power': 'power', 'building_1': 'building_1', 'military': 'military', 'bunker_typ': 'bunker_typ', 'sport': 'sport', 'opening_ho': 'opening_ho', 'name_ru': 'name_ru', 'internet_a': 'internet_a', 'height': 'height', 'leisure': 'leisure', 'abandoned': 'abandoned', 'office': 'office', 'shop': 'shop', 'healthcare': 'healthcare', 'website': 'website', 'name': 'name', 'amenity': 'amenity', 'start_date': 'start_date', 'roof_shape': 'roof_shape', 'energy_cla': 'energy_cla', 'building_l': 'building_l', 'building_2': 'building_2', 'building_f': 'building_f', 'type': 'type', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'address': 'address', });
lyr_highway1_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'old_name_d': 'old_name_d', 'tracktype': 'tracktype', 'flood_pron': 'flood_pron', 'width': 'width', 'trail_visi': 'trail_visi', 'sac_scale': 'sac_scale', 'mtb_scale_': 'mtb_scale_', 'mtb_scale': 'mtb_scale', 'incline': 'incline', 'horse': 'horse', 'maxweight_': 'maxweight_', 'footway': 'footway', 'motor_vehi': 'motor_vehi', 'embankment': 'embankment', 'covered': 'covered', 'source_max': 'source_max', 'old_ref': 'old_ref', 'lane_marki': 'lane_marki', 'name_de': 'name_de', 'type': 'type', 'route': 'route', 'junction': 'junction', 'turn_lanes': 'turn_lanes', 'turn_lan_1': 'turn_lan_1', 'living_str': 'living_str', 'access': 'access', 'man_made': 'man_made', 'maxspeed_t': 'maxspeed_t', 'lit': 'lit', 'ref': 'ref', 'foot': 'foot', 'abandoned_': 'abandoned_', 'layer': 'layer', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'bridge': 'bridge', 'noexit': 'noexit', 'name_pl': 'name_pl', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'bicycle': 'bicycle', 'oneway': 'oneway', 'maxspeed_p': 'maxspeed_p', 'addr_postc': 'addr_postc', 'surface': 'surface', 'sidewalk': 'sidewalk', 'name_etymo': 'name_etymo', 'postal_cod': 'postal_cod', 'name_ru': 'name_ru', 'name_be': 'name_be', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'layer': '', 'descriptio': '', 'roof_orien': '', 'roof_mater': '', 'roof_level': '', 'roof_colou': '', 'building_m': '', 'building_c': '', 'man_made': '', 'addr_place': '', 'religion': '', 'denominati': '', 'power': '', 'building_1': '', 'military': '', 'bunker_typ': '', 'sport': '', 'opening_ho': '', 'name_ru': '', 'internet_a': '', 'height': '', 'leisure': '', 'abandoned': '', 'office': '', 'shop': '', 'healthcare': '', 'website': '', 'name': '', 'amenity': '', 'start_date': '', 'roof_shape': '', 'energy_cla': '', 'building_l': '', 'building_2': '', 'building_f': '', 'type': '', 'addr_stree': '', 'addr_postc': '', 'addr_house': '', 'addr_count': '', 'addr_city': '', 'address': '', });
lyr_highway1_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'old_name_d': '', 'tracktype': '', 'flood_pron': '', 'width': '', 'trail_visi': '', 'sac_scale': '', 'mtb_scale_': '', 'mtb_scale': '', 'incline': '', 'horse': '', 'maxweight_': '', 'footway': '', 'motor_vehi': '', 'embankment': '', 'covered': '', 'source_max': '', 'old_ref': '', 'lane_marki': '', 'name_de': '', 'type': '', 'route': '', 'junction': '', 'turn_lanes': '', 'turn_lan_1': '', 'living_str': '', 'access': '', 'man_made': '', 'maxspeed_t': '', 'lit': '', 'ref': '', 'foot': '', 'abandoned_': '', 'layer': '', 'lanes_forw': '', 'lanes_back': '', 'bridge': '', 'noexit': '', 'name_pl': '', 'service': '', 'turn_lan_2': '', 'bicycle': '', 'oneway': '', 'maxspeed_p': '', 'addr_postc': '', 'surface': '', 'sidewalk': '', 'name_etymo': '', 'postal_cod': '', 'name_ru': '', 'name_be': '', 'name': '', 'maxspeed': '', 'lanes': '', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'descriptio': 'no label', 'roof_orien': 'no label', 'roof_mater': 'no label', 'roof_level': 'no label', 'roof_colou': 'no label', 'building_m': 'no label', 'building_c': 'no label', 'man_made': 'no label', 'addr_place': 'no label', 'religion': 'no label', 'denominati': 'no label', 'power': 'no label', 'building_1': 'no label', 'military': 'no label', 'bunker_typ': 'no label', 'sport': 'no label', 'opening_ho': 'no label', 'name_ru': 'no label', 'internet_a': 'no label', 'height': 'no label', 'leisure': 'no label', 'abandoned': 'no label', 'office': 'no label', 'shop': 'no label', 'healthcare': 'no label', 'website': 'no label', 'name': 'no label', 'amenity': 'no label', 'start_date': 'no label', 'roof_shape': 'no label', 'energy_cla': 'no label', 'building_l': 'no label', 'building_2': 'no label', 'building_f': 'no label', 'type': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'address': 'no label', });
lyr_highway1_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'old_name_d': 'no label', 'tracktype': 'no label', 'flood_pron': 'no label', 'width': 'no label', 'trail_visi': 'no label', 'sac_scale': 'no label', 'mtb_scale_': 'no label', 'mtb_scale': 'no label', 'incline': 'no label', 'horse': 'no label', 'maxweight_': 'no label', 'footway': 'no label', 'motor_vehi': 'no label', 'embankment': 'no label', 'covered': 'no label', 'source_max': 'no label', 'old_ref': 'no label', 'lane_marki': 'no label', 'name_de': 'no label', 'type': 'no label', 'route': 'no label', 'junction': 'no label', 'turn_lanes': 'no label', 'turn_lan_1': 'no label', 'living_str': 'no label', 'access': 'no label', 'man_made': 'no label', 'maxspeed_t': 'no label', 'lit': 'no label', 'ref': 'no label', 'foot': 'no label', 'abandoned_': 'no label', 'layer': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'bridge': 'no label', 'noexit': 'no label', 'name_pl': 'no label', 'service': 'no label', 'turn_lan_2': 'no label', 'bicycle': 'no label', 'oneway': 'no label', 'maxspeed_p': 'no label', 'addr_postc': 'no label', 'surface': 'no label', 'sidewalk': 'no label', 'name_etymo': 'no label', 'postal_cod': 'no label', 'name_ru': 'no label', 'name_be': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_highway1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});