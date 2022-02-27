document.addEventListener("keyup", function (e) {
  if (e.keyCode == 8) {
    deleteLetter(e);
  } else if (e.keyCode == 13) {
    submitLetter(e);
  } else if (e.keyCode >= 65 && e.keyCode <= 90) {
    writeLetter(e);
  }
});
