var id = null;
var whidth = 0;
var velocity = 0;
var wait = 0;

if (screen.width < 1800){
  whidth = 400;
  velocity = 20;
  wait = 500;
} else {
  whidth = 1800;
  velocity = 30;
  wait = 100;
}


function myMove(ID) {
    var elem = document.getElementById("featured_wallet"); 
    var pos = 0;
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
    //setTimeout(kk, 500);

    let ids = [1,2,3,4,5,6,7];

    document.getElementById(ID).className = "active"

    delete ids[ID-1];

    ids.forEach(element => {
      document.getElementById(element).className = "inactive"
    });
}



function kk(ID) {
    document.getElementById("main_img").src = `img/wallet_${ID}.png`

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



