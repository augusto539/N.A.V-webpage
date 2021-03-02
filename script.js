function wallets_list(id) {
    console.log(id);

    let el = document.getElementsByClassName('featured_wallet');

    document.getElementById("main_img").src = `img/wallet_${id}.png`;
}


var id = null;
var velocity = 30;
function myMove(ID) {
    var elem = document.getElementById("featured_wallet"); 
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos == -1250) {
        clearInterval(id);
      } else {
        pos = pos - velocity;  
        elem.style.left = pos + 'px';
      }
      console.log(pos)
    }


    setTimeout(() => { kk(ID); }, 500);
    //setTimeout(kk, 500);
  
}



function kk(ID) {
    document.getElementById("main_img").src = `img/wallet_${ID}.png`

    var elem = document.getElementById("featured_wallet");   
    var pos = 1500;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
        clearInterval(id);
        } else {
        pos = pos - velocity;  
        elem.style.left = pos + 'px';
        }
        console.log(pos)
    }
}