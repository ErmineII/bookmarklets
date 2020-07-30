var commandmode = true;
var mark = {};
var tmp, n;
var viMode = function(wundow, e) {
    if (e.keyCode == 73) commandmode=false;
    if (e.keyCode == 27) commandmode=true;
    if (commandmode){
    switch(e.keyCode){
        case 74:  // j for down
          wundow.scrollBy(0,75);
         break;
       case 75: //k: up
          wundow.scrollBy(0,-75);
          break;
        case 71:  //g or G
         mark["'"] = wundow.scrollY;
          if(e.shiftKey){
            wundow.document.body.scrollIntoView(false);
         } else {
         wundow.document.body.scrollIntoView(true);
         }
         break;
/*    case 68:
      window.open("null", "_self");
      break; */
      case 77: //m to record mark
        mark[prompt('mark to record:')] = wundow.scrollY;
        break;
      case 222: // quote to go to mark
        tmp = wundow.scrollY;
        wundow.scrollTo(wundow.scrollX,mark[prompt('mark to go to:')]);
        mark["'"] = tmp;
         break;
      case 89: // currently y to open plaintext in new tab
       n=window.open();
        n.document.write('<link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Hot_Chocolate_-_The_Noun_Project.svg/200px-Hot_Chocolate_-_The_Noun_Project.svg.png">' +
        	"<title>" + wundow.document.title + "</title><br>" + "<h2>" + wundow.document.title + "</h2><br>" + wundow.document.body.innerText.replace(/\n/g,"<br>"));
        n.document.body.setAttribute("style","margin: 1in; font-family: monospace; color: rgb(255, 255, 255); background-color: rgb(5, 17, 6);");
        n.onkeydown=((event)=>viMode(n, event));
       break;
      /*case 189: // `:` for command
        if(e.shiftKey){
            colonCom();
        }
        break;*/
      case 191: // `/` to search page
        textSearch();
        break;
  }
}
}

window.onkeydown=((event)=>viMode(window, event));
/*
function colonCom(){
    var command = prompt(":");
}*/

function textSearch (){
    var quer = prompt("Search for: ");
    document.body.innerHTML = document.body.innerHTML.
        replace( new RegExp("(>[^<]*)("+quer+")" , "g")  ,  "$1<mark>$2</mark>");
}
