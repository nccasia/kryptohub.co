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
  if (myIndex[id] > x.length) {myIndex[id] = 1}    
  x[myIndex[id]-1].style.display = "block";  
  console.log(myIndex[id] - 1)
  console.log(dots)
  dots[myIndex[id] - 1].className += " w3-white";
  timeout[id] = setTimeout(() => {
    carousel(id)
  }, 3000);
}

// var imgSlider = document.querySelectorAll('#slider-item');

// imgSlider.map(item => item)

// console.log(imgSlider)

  
// console.log(test)

//   var i;
// for( i = 0; i < imgSlider.length; i ++){
//   console.log(imgSlider)
// }

// if (imgSlider.style.display == 'none') {
//   console.log('test')
// }
// var idSlider = document.getElementById('slider-item');
// var classSlider = document.getElementsByClassName('slider-item');
// console.log(classSlider)
// var divSlider = classSlider[0].querySelectorAll('div')
// var test = divSlider[0].querySelectorAll('img')
  // var i;
  // for(i = 0; i < classSlider.length; i++) {
  //   console.log(idSlider)
  // console.log(classSlider.querySelectorAll('#myImg')) 
  // }