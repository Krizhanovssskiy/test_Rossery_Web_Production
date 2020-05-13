const mapBox = () => {
    const inputAddress = document.getElementById('inputAddress');
    const Btn = document.getElementById('Btm-active-address');
    const btnOpenMap = document.getElementById('OpenMap');
    const contactsBox = document.querySelector('.Contacts');

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
////////////////////////////////////////////

    const onMapOpen = () => {
        if (btnOpenMap.classList.contains('btnOpen')) {
            btnOpenMap.classList.remove('btnOpen');
            btnOpenMap.classList.add('btnClose');
            contactsBox.classList.add('Contacts__show-map');
            inputAddress.value = '';
            directionPath.setOrigin([ 32.06446,49.44091 ])
        } else if (btnOpenMap.classList.contains('btnClose')) {
            btnOpenMap.classList.remove('btnClose');
            btnOpenMap.classList.add('btnOpen');
            contactsBox.classList.remove('Contacts__show-map');
            inputAddress.value = '';
            directionPath.removeRoutes();
        }

    }
    btnOpenMap.addEventListener('click', onMapOpen, false)

}
module.exports = mapBox;
