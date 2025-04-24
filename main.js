// Initialisation de la carte
var map = L.map('map').setView([48.8566, 2.3522], 6); // Coordonnées de Paris

// Ajout du fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Exemple de point GeoJSON
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Exemple de point"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [2.3522, 48.8566]
    }
};

L.geoJSON(geojsonFeature).addTo(map);
