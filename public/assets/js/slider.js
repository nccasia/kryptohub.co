let slideIndex = 1;
show(slideIndex);

function plusDivs(n) {
  show((slideIndex += n));
}

function show(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

let slider2 = 1;
showDivs2(slider2);
function plusDivs2(n) {
  showDivs2((slider2 += n));
}
function showDivs2(n) {
  let i;
  let x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {
    slider2 = 1;
  }
  if (n < 1) {
    slider2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slider2 - 1].style.display = "block";
}

let slider3 = 1;
show3(slider3);
function plusDivs3(n) {
  show3((slider3 += n));
}
function show3(n) {
  let i;
  let x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {
    slider3 = 1;
  }
  if (n < 1) {
    slider3 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slider3 - 1].style.display = "block";
}

let slider4 = 1;
show4(slider4);
function plusDivs4(n) {
  show4((slider4 += n));
}
function show4(n) {
  let i;
  let x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {
    slider4 = 1;
  }
  if (n < 1) {
    slider4 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slider4 - 1].style.display = "block";
}


let slider5 = 1;
show5(slider5);
function plusDivs5(n) {
  show5((slider5 += n));
}
function show5(n) {
  let i;
  let x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {
    slider5 = 1;
  }
  if (n < 1) {
    slider5 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slider5 - 1].style.display = "block";
}

let slider6 = 1;
show6(slider6);
function plusDivs6(n) {
  show6((slider6 += n));
}
function show6(n) {
  let i;
  let x = document.getElementsByClassName("mySlides6");
  if (n > x.length) {
    slider6 = 1;
  }
  if (n < 1) {
    slider6 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slider6 - 1].style.display = "block";
}