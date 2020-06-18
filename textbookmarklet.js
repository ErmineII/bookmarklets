var win = window.open();
win.document.write(
  document.body.innerText.replace(/\n/g,"<br>"));
win.document.body.setAttribute("style","margin: 1in");;
