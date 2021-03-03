var id = null;

if (screen.width < 900){
  var velocity = 5;
} else {
  var velocity = 30
}
function myMove(ID) {
    var elem = document.getElementById("featured_wallet"); 
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos == screen.width) {
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
    var pos = screen.width;
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