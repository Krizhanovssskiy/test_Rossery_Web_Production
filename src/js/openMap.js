const openMap = () => {
    const btnOpenMap = document.getElementById('OpenMap');
    const contactsBox = document.querySelector('.Contacts')
    const canvas = document.querySelector('.mapboxgl-canvas')
    const onMapOpen = (e) => {
        console.log(contactsBox)
       if (btnOpenMap.classList.contains('btnOpen')) {
           btnOpenMap.classList.remove('btnOpen');
           btnOpenMap.classList.add('btnClose');
           contactsBox.classList.add('Contacts__show-map')
           canvas.style = 'width: 100%;';
           canvas.style = 'height: 100%;';
           canvas.style = 'box-shadow: inset 50px 30px 50px 15px white;'

       } else if (btnOpenMap.classList.contains('btnClose')) {
           btnOpenMap.classList.remove('btnClose');
           btnOpenMap.classList.add('btnOpen');
           contactsBox.classList.remove('Contacts__show-map')
       }

    }
    console.log(btnOpenMap, 'btm')
    btnOpenMap.addEventListener('click', onMapOpen, false)
}

module.exports = openMap;
