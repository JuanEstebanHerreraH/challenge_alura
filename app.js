
let ListFriends = [];
let addfriend;
let cantidad= 0;
function GeneratedText(element, text) {
    let el = document.querySelector(element); 
    el.innerHTML = text; 
}

function AddFriend() {
    addfriend = document.getElementById('amigo').value;

    if (!addfriend) { 
        alert('Amigo Secreto: No se escribió ningún nombre.');
    } else if (ListFriends.includes(addfriend)) {
    } else {
        ListFriends.push(addfriend);
    }
}

function loterryFriend() {
    let random = Math.floor(Math.random() * ListFriends.length);
    let selectedFriend = ListFriends[random];
for (let i = 0; i < ListFriends.length; i++ ){

    if (ListFriends.length === 0 ) {
        alert('No hay amigos en la lista para elegir.');
        return;
    } else if (ListFriends[i]){
       if (ListFriends.length == cantidad){
          GeneratedText('h2','se acabo la lista de amigos');
        }
      else if(ListFriends[i] === selectedFriend){
        GeneratedText('h2', `El amigo seleccionado fue: ${selectedFriend}`);
         cantidad++;

      }


    }

}

}

