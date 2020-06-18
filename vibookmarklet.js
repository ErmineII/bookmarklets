var commandmode = true;
var mark = {}; /* keeps marks of scroll positions */
var tmp;
window.onkeydown = function(e) {
if (e.keyCode == 73) commandmode=false;  /* esc to go to "commandmode" where *things* happen, i for when you want to type */
if (e.keyCode == 27) commandmode=true;
if (commandmode){
switch(e.keyCode){
    case 74: /* press j to scroll down */
      window.scrollBy(0,75);
      break;
    case 75: /* k for up */
      window.scrollBy(0,-75);
      break
    case 71: /* g to scroll to top */
      mark["'"] = window.scrollY;
      document.body.scrollIntoView(true);
      break;
    case 16: /* shift pressed and so a prompt is created for the next character
 * todo: manage shift without prompting */
      shift();
      break;
    case 68: /* don't know how to delete current tab, so this just opens a search ingine in the current one */
      window.open("ddg.gg", "_self");
      break;
    case 77: /* record a mark */
      mark[prompt('mark to record:')] = window.scrollY;
      break;
    case 222: /* move to mark when ' is pressed */
      tmp = window.scrollY;
      window.scrollTo(window.scrollX,mark[prompt('mark to go to:')]);
      mark["'"] = tmp;
      break;
  }
}
}

function shift (){
  var inp = prompt('?>');
  switch(inp){
    case "g": /* move to the bottom of the page */
    case "G":
      mark["'"] = window.scrollY;
      document.body.scrollIntoView(false);
      break;
      case "/": /* search when / is used, currently unimportant
 * TODO: add searching within the page */
      window.open("ddg.dd");
      break;
  }
}
