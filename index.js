let keys = document.getElementsByClassName("key");

for (let i = 0; i < 28; i++) {
  keys[i].addEventListener("click", function () {
    var e = new KeyboardEvent("keyup", {
      bubbles: true,
      cancelable: true,
      key: keys[i].innerHTML,
      char: keys[i].innerHTML,
      shiftKey: true,
    });
    delete e.keyCode;
    let val = keys[i].innerHTML.charCodeAt(0);
    if (val === 60) val = 8;
    else if (val === 10) val = 13;
    Object.defineProperty(e, "keyCode", {
      value: val,
    });
    document.dispatchEvent(e);
  });
}

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 8) {
    deleteLetter(e);
  } else if (e.keyCode == 13) {
    submitLetter(e);
  } else if (e.keyCode >= 65 && e.keyCode <= 90) {
    writeLetter(e);
  }
});
