var id = null;
var whidth = 0;
var velocity = 0;
var wait = 0;

let ids = [1,2,3,4,5,6,7,8];

let one_less=0;
let one_more=0;


function buttons(button_type){

  if (button_type == 'left-arrow'){

    one_less = ids.indexOf('#');
 
    if (one_less == 0){
      one_less = ids[ids.length - 1]
    }
    myMove(one_less)
  }

  if (button_type == 'right-arrow'){

    one_more = ids.indexOf('#') + 2;

    if (one_more == 9){
      one_more = ids[0]
    }
    myMove(one_more)
  }
}



function myMove(ID) {

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

  setTimeout(() => { kk(ID); }, 500);
  
  document.getElementById(ID).className = "active"

  ids[ID-1] = '#'

  ids.forEach(element => {
    if (element != '#'){
      document.getElementById(element).className = "inactive"
    }
  });
}



function kk(ID) {
    document.getElementById("main_img").src = `../img/wallet_${ID}.png`

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



