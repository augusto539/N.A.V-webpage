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
    }


    setTimeout(() => { kk(ID); }, 500);
    //setTimeout(kk, 500);

    let ids = [1,2,3,4,5,6,7];

    document.getElementById(ID).className = "active"

    delete ids[ID-1];

    ids.forEach(element => {
      document.getElementById(element).className = "inactive"
    });
  
    console.log(ids)
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
    }
}