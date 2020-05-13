const mapBox = () => {
    const inputAddress = document.getElementById('inputAddress');
    const Btn = document.getElementById('Btm-active-address');
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpemhhbm92c3Nza2l5IiwiYSI6ImNrYTJkMDYxMzA5MnozbG9nd3JtdWJjNXoifQ.jx17DzqDoY7fufqJMVZ9Uw';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [32.0621, 49.4285],
        zoom: 13,
        trackResize: true
    });
    const directionPath = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
        controls: {
            inputs: false,
            instructions: true,
            profileSwitcher: true
        }
    })
    map.addControl(
        directionPath,
        'bottom-right'
    );

    map.on('load', function() {
        directionPath.setOrigin([ 32.06446,49.44091 ])
        map.setLayoutProperty('country-label', 'text-field', [
            'get',
            'name_ru'
        ]);
    });

    Btn.addEventListener('click', () => {
        directionPath.setDestination(inputAddress.value);

    })

}
module.exports = mapBox;
