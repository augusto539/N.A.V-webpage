var id = null;
var whidth = 0;
var velocity = 0;
var wait = 0;

let ids = [1,2,3,4,5,6,7,8];

let one_less=0;
let one_more=0;


let info= [
            {'h1':'billetera Bowie','p':'Who will love Aladdin Sane?','cards':4,'original':true},
            {'h1':'Fire watch','p':'Fire watch','cards':4,'original':false},
            {'h1':'Mapa planisferio','p':'Si, esta "al revés"','cards':4,'original':true},
            {'h1':'1976','p':'1976','cards':4,'original':true},
            {'h1':'bananas','p':'billetera llena de potacio','cards':4,'original':true},
            {'h1':'la gran ola','p':'Impresión xilográfica echa por Katsushika Hokusai','cards':4,'original':false},
            {'h1':'La Nascita di Venere','p':'pintura realizada por Sandro Botticelli','cards':4,'original':false},
            {'h1':'leaves 1','p':'grupo de arbusto insulsos','cards':4,'original':true},
          ];


function buttons(button_type){

  if (button_type == 'left-arrow'){

    one_less = ids.indexOf('#');
 
    if (one_less == 0){
      one_less = ids[ids.length - 1]
    }
    animation(one_less)
  }

  if (button_type == 'right-arrow'){

    one_more = ids.indexOf('#') + 2;

    if (one_more == 9){
      one_more = ids[0]
    }
    animation(one_more)
  }
}



function animation(ID) {

  ids = [1,2,3,4,5,6,7,8];
  var elem = document.getElementById("featured_wallet"); 
  var pos = 0;

  

  if (screen.width < 1800){
    whidth = 400;
    velocity = 20;
    wait = 500;
  } else {
    whidth = 1800;
    velocity = 30;
    wait = 100;
  }

  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == -whidth) {
      clearInterval(id);
    } else {
      pos = pos - velocity;  
      elem.style.left = pos + 'px';
    }
  }

  setTimeout(() => { second_animation(ID); }, 500);
  
  document.getElementById(ID).className = "active"

  ids[ID-1] = '#'

  ids.forEach(element => {
    if (element != '#'){
      document.getElementById(element).className = "inactive"
    }
  });
}
function second_animation(ID) {

  re_rite(ID)

  var elem = document.getElementById("featured_wallet");   
  var pos = whidth;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos = pos - velocity;  
      elem.style.left = pos + 'px';
    }
  }
}


function re_rite(ID){
  document.getElementById("main_img").src = `../images/models/mockuped_wallets/wallet_${ID}.png`


  document.getElementById('featured_wallet_h1').innerHTML = info[ID-1].h1;
  document.getElementById('featured_wallet_p').innerHTML = info[ID-1].p;

  if (info[ID-1].original == false) {
    document.getElementById('original').style.display = 'none';

    document.getElementById('cards').style.marginLeft = '50%'

  } else {
    document.getElementById('original').style.display = 'block';
    document.getElementById('cards').style.marginLeft = '0%'
  }
}



