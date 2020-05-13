const openMap = () => {
    const btnOpenMap = document.getElementById('OpenMap');
    const contactsBox = document.querySelector('.Contacts');
    const inputAddress = document.getElementById('inputAddress')
    const onMapOpen = () => {
       if (btnOpenMap.classList.contains('btnOpen')) {
           btnOpenMap.classList.remove('btnOpen');
           btnOpenMap.classList.add('btnClose');
           contactsBox.classList.add('Contacts__show-map')
           inputAddress.value = ''
       } else if (btnOpenMap.classList.contains('btnClose')) {
           btnOpenMap.classList.remove('btnClose');
           btnOpenMap.classList.add('btnOpen');
           contactsBox.classList.remove('Contacts__show-map')
           inputAddress.value = ''
       }

    }
    btnOpenMap.addEventListener('click', onMapOpen, false)
}

module.exports = openMap;
