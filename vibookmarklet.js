var commandmode = true;
var mark = {}; /* keeps marks of scroll positions */
var tmp;
/* my favorite search engine */
var searx = "https://searx.ninja/?preferences=eJxtVEGv0zAM_jX0Ug0B78CpBwRCPAnpPbE9rpGXum1oEhcn3VZ-PU7bbemDwzrFsT9_n-1YQ8SW2GCoWvTIYAsLvh2hxQr97mVfWNJg06GAMZImN1iMWNWj7tOvpcI48VYD02WqDjxi4TB2VFfPT_tDEaDBgMC6q94VsUOHFQUNXDCG0cagyCuPZxXhWH0FG7CoySi5JHtCrgjk-Ja4LeaoXYiTkLHUGk01nnY1cF_UJsDRYq3Qt8aLlAaYSKlV0ZsPnxcGKaRMH6VMFGtL1FosT6ZGCkot_2IH3QYaxSkJSwY_ASjVGDufkOls6hw-gZsTlibk1t9n8DE3nAjkHEgbsKXD2oAYI_UTRQod9eDvSRz9Quzz6N7oHoJkcGMwOtE3rciGEP_rdVMz-jCIV5fpuQq8-ayVWBwyx4B_PLgc__3Dw8dLFrmU5koJhr50hpl4W2IhMJUwDOEusGHEMlATz8BY1oZRR-JpjWsYHFhz5G2vcibpFngqkyVsK3_Vd801ga_xkntgJLKbmJWpzKKY03eO67ZzdAW-6m3Y-N6Azkr2_pId1kFc4ToQxumzanrV-ltfpfHRuLkRMW_pVc6ruNddnIs9g90xtda7eMp8jyYe5fliXJMYD9mtmxw66UYZGXywsiQ28740_eZdjzX6bXUnR97KW8ytNKBnHChTsmFMJ4Phn9Faalmg3z7x-6Mf7CimUD0JvPqkNUqpvjw9yg45s4koQD-N21nTo-oo9jgl7EffGC-3Kmgmm9jN4ctSUsK8v22mozz3gJw21J3GNekebaMEjNhBNOQT9rfD4Xmfpd_PyyfB6WXbTiqglXGXuwODNIHVy4_vEiElQC6kvSjQfwGI1R0W";
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
      window.open(searx, "_self");
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
      window.open(searx);
      break;
  }
}

/*
function searchsearx(){
   window.open(searx, "_self");
}
*/
