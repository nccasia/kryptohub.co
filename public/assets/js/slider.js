// let slideIndex = [1,1,1,1,1,1]
// let slideId = ["game", "investment"]

// showSlides(1, 'game');
// showSlides(1, 'investment');
// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }
// function showSlides(n, no) {
//   let i;
//   let getIdSlide = document.getElementsByClassName(slideId[no]);
//   if (n > getIdSlide.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = getIdSlide.length}
//   for (i = 0; i < getIdSlide.length; i++) {
//     getIdSlide[i].style.display = "none";  
//   }
//   getIdSlide[slideIndex[no]-1].style.display = "block";  
// }

function currentDiv(index, id) {
  showDivs(index, id);
}
function showDivs(index, id) {
  var x = document.querySelectorAll(`#${id} .mySlides`);
  var dots = document.querySelectorAll(`#${id} .dot`);
  myIndex[id] = index
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[index - 1].style.display = "block";
  dots[index - 1].className += " w3-white";
  clearTimeout(timeout[id])
  timeout[id] = setTimeout(() => {
    carousel(id)
  }, 3000);
}
var timeout = {
  game: 0,
  investment: 0,
  finance: 0,
  insurance: 0,
  education: 0,
  entertainment: 0,
};
var myIndex = {
  game: 1,
  investment: 1,
  finance: 1,
  insurance: 1,
  education: 1,
  entertainment: 1,
};
carousel('game');
carousel('investment');
carousel('finance');
carousel('insurance');
carousel('education');
carousel('entertainment');
function carousel(id) {
  var x = document.querySelectorAll(`#${id} .mySlides`);
  var dots = document.querySelectorAll(`#${id} .dot`);
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex[id]++;
  if (myIndex[id] > x.length) {
    myIndex[id] = 1;
  }
  x[myIndex[id] - 1].style.display = "block";
  dots[myIndex[id] - 1].className += " w3-white";
  timeout[id] = setTimeout(() => {
    carousel(id);
  }, 3000);
}

//loading co
function showLoading() {
  document.getElementById("mce-responses").style.display = "none";
  var mailForm = document.getElementById("mce-EMAIL");
  if (mailForm.value.length == 0) {
    document.getElementById("want-mail").style.display = "block";
  } else {
    document.getElementById("want-mail").style.display = "none";
    document.getElementById("loadingGif").style.display = "block";
    setTimeout(function () {
      document.getElementById("loadingGif").style.display = "none";
      document.getElementById("mce-responses").style.display = "block";
    }, 2000);
  }
}
