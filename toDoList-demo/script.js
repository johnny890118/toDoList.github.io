function myfunction4() {
  let choose = document.querySelector("#choose").value;
  let btn2 = document.querySelector("#enter");
  btn2.className = "btn" + choose;
}

function myfunction() {
  function myfunction2() {
    li.remove();
  }
  let text = document.querySelector("#text").value;
  let app = document.querySelector("#app");
  let li = document.createElement("li");
  let span = document.createElement("span");
  let span2 = document.createElement("span");
  let div = document.createElement("div");
  let btn = document.createElement("button");
  let btn3 = document.createElement("button");
  let choose = document.querySelector("#choose").value;
  span.textContent = text;
  span2.textContent = "";
  btn3.textContent = "✓";
  btn3.className = "btn3";
  btn.textContent = "X";
  btn.className = "btn";
  app.append(li);
  span2.style.display = "none";
  span2.className = "btn33";
  li.append(span, span2);
  span.className = span.className + choose;
  li.append(div);
  div.className = "fc";
  div.append(btn3);
  div.append(btn);
  btn.onclick = myfunction2;

  function myfunction5() {
    let z = span2.style.display;
    if (z === "none") {
      span2.style.display = "block";
      btn3.className = "btn33";
    } else {
      span2.style.display = "none";
      btn3.className = "btn3";
    }
  }
  btn3.onclick = myfunction5;
}

function myfunction3() {
  let app1 = document.querySelector("#app").children;
  let num = 1;
  let output = "";
  for (let y of app1) {
    let yclass = y.children[0].className;
    if (yclass == "important") {
      output =
        output +
        "  " +
        num.toString() +
        ". " +
        "*" +
        y.children[0].textContent +
        "*";
    } else if (yclass == "warn") {
      output =
        output +
        "  " +
        num.toString() +
        ". " +
        "**" +
        y.children[0].textContent +
        "**";
    } else {
      output =
        output + "  " + num.toString() + ". " + y.children[0].textContent;
    }
    num = num + 1;
  }
  alert("今日待辦: " + output);
}
