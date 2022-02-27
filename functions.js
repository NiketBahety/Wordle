let count = 0;
let checked = false;
let word = "";
let letters = document.getElementsByClassName("letters");
let originalWord = "SPILL";

axios
  .get("https://randomwords-api.herokuapp.com/api/v1/multiple?length=5")
  .then(function (res) {
    console.log(res.data.data.word);
    originalWord = res.data.data.word;
    originalWord = originalWord.toUpperCase();
  })
  .catch(function (err) {
    console.log(err);
  });

function deleteLetter(e) {
  if (count > 0 && word.length != 0) {
    checked = false;
    count--;
    let letter = letters[count];
    letter.classList.remove("filled");
    letter.innerHTML = "";
    word = word.slice(0, -1);
  }
}
function submitLetter(e) {
  if (count % 5 === 0 && count != 0 && word.length != 0) {
    console.log("Entered");
    console.log(word);
    checked = false;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (word[i] === originalWord[i]) arr.push("green");
      else if (originalWord.includes(word[i])) arr.push("rgb(255, 140, 0)");
      else arr.push("#333");
    }
    for (let i = count - 5; i < count; i++) {
      console.log(letters[i]);
      letters[i].style.animation = "flip 1s";
      letters[i].style.animationDelay = (i % 5) * 0.25 + "s";
      letters[i].children[0].style.animation = "reverse-flip 1s";
      letters[i].children[0].style.animationDelay = (i % 5) * 0.25 + "s";
    }
    let x = 250;
    for (let i = count - 5; i < count; i++) {
      setTimeout(function () {
        letters[i].style.backgroundColor = arr[i % 5];
      }, x);
      x = x + 250;
    }
    console.log(arr);
    if (word === originalWord) {
      setTimeout(function () {
        alert("Victory");
      }, 2000);
    } else if (count === 30) {
      setTimeout(function () {
        alert(`Lost !! Word was ${originalWord}`);
      }, 2000);
    }
    word = "";
  }
}

function writeLetter(e) {
  if (!checked) {
    let letter = letters[count];
    let p = document.createElement("p");
    p.innerHTML = String.fromCharCode(e.keyCode);
    letter.append(p);
    letter.classList.add("filled");
    count++;
    p.style.fontSize = "26px";
    setTimeout(function () {
      p.style.fontSize = "24px";
    }, 100);
    word = word.concat(String.fromCharCode(e.keyCode));
    console.log(word);
    if (count % 5 != 0) checked = false;
    else checked = true;
  }
}
