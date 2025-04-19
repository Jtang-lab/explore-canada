// script.js
document.addEventListener('DOMContentLoaded', () => {
    // ... (previous JavaScript code) ...
    const map = L.map('map').setView([56.1304, -106.3468], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.1784, -115.5708]).addTo(map).bindPopup('Banff National Park');
    L.marker([49.2827, -123.1207]).addTo(map).bindPopup('Vancouver');
    L.marker([46.8139, -71.2080]).addTo(map).bindPopup('Quebec City');
    L.marker([64.2823, -135.0000]).addTo(map).bindPopup('Yukon Territory');
});