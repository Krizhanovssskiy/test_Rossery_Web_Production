const mapBox = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpemhhbm92c3Nza2l5IiwiYSI6ImNrYTJkMnJwMDAwYm8zbWw5OHR3Y21hemIifQ.YlxkPzI9TNfzH0a-uCb-dg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [32.0565625, 49.426618999999995],
        zoom: 11
    });

    const nav = new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
    })

    map.addControl(nav, 'bottom-right')
}
module.exports = mapBox;
