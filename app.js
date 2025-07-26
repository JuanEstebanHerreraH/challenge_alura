
let ListFriends = [];
let addfriend;

function GeneratedText(element, text) {
    let el = document.querySelector(element); 
    el.innerHTML = text; 
}

function AddFriend() {
    addfriend = document.getElementById('amigo').value;

    if (!addfriend) { 
        alert('Amigo Secreto: No se escribió ningún nombre.');
    } else if (ListFriends.includes(addfriend)) {
        alert('Ese amigo ya fue añadido.');
    } else {
        ListFriends.push(addfriend);
        alert('Amigo añadido correctamente.');
    }
}

function loterryFriend() {
    if (ListFriends.length === 0) {
        alert('No hay amigos en la lista para elegir.');
        return;
    }

    let random = Math.floor(Math.random() * ListFriends.length);
    let selectedFriend = ListFriends[random];

    GeneratedText('h2', `El amigo seleccionado fue: ${selectedFriend}`);
}


