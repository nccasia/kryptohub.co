var modal = document.getElementById("myModal");
var captionText = document.getElementById("caption");
var bg = document.getElementById("background-image-modal");
var parentImg = document.getElementById("popup-img")
var idImg = document.getElementById("myImg");
var classImg = document.getElementsByClassName("w3-button")
var content = document.getElementById("content-text-modal")
var titleModal = document.getElementById("title-text-modal")
var linkModal = document.getElementById("link-text-modal")
var desModal = document.getElementById("des-text-modal")


var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

if (height < width) {
  if (width < 900) {
    document.getElementById("background-image-modal").style.marginTop = "40px";
    var close = document.getElementById("close-modal");
    close.style.marginTop = "-75px";
  }


  document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id === "myImg") {
      modal.style.display = "block";
      let parent = (elem.parentNode)
      titleModal.innerHTML = parent.getElementsByClassName('title')[0].innerText
      desModal.innerHTML = parent.getElementsByClassName('des')[0].innerText
      linkModal.innerHTML = parent.getElementsByClassName('link')[0].innerText

      console.log(elem, parent)
      // titleModal.innerHTML = elem.h3;
    }

    if (elem.classList.contains("ATLAS")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-atlas");
    } else if (elem.classList.contains("maviawwwwwwww")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-chinetwork");
    } else if (elem.classList.contains("EpicWar")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-EpicWar");
    } else if (elem.classList.contains("undead_block")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Flow-Station");
    } else if (elem.classList.contains("Fortia")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Fortia");
    } else if (elem.classList.contains("Jucc")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-JUCC");
    } else if (elem.classList.contains("mavia")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Mavia");
    } else if (elem.classList.contains("memepad")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-MemePad");
    } else if (elem.classList.contains("Midas")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-midas");
    } else if (elem.classList.contains("Nafter")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-nafter");
    } else if (elem.classList.contains("STO")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-stoplatform");
    } else if (elem.classList.contains("maviawwwwwwwww")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Teo");
    } else if (elem.classList.contains("THEMIS")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-themis");
    } else if (elem.classList.contains("Topaz")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-topaz");
    } else if (elem.classList.contains("Treelion-App")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Treelion");
    } else if (elem.classList.contains("Tx8")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-TX8");
    } else if (elem.classList.contains("undead_block")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Undead_Block");
    } else if (elem.classList.contains("warena")) {
      bg.removeAttribute("class");
      bg.classList.add("bg-Warena");
    } else {
    }
  });

  var span = document.getElementsByClassName("close-modal")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
} else {


  if (width < 640) {
    document.getElementById("background-image-modal").style.width = "95%";
    var close = document.getElementById("close-modal");
    close.style.marginTop = "-75px";
  }

  document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id === "myImg") {
      modal.style.display = "block";
      let parent = (elem.parentNode)
      titleModal.innerHTML = parent.getElementsByClassName('title')[0].innerText
      desModal.innerHTML = parent.getElementsByClassName('des')[0].innerText
      linkModal.innerHTML = parent.getElementsByClassName('link')[0].innerText
    }

    if (elem.classList.contains("ATLAS")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-atlas");
    } else if (elem.classList.contains("maviawwwwwwww")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-chinetwork");
    } else if (elem.classList.contains("EpicWar")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-EpicWar");
    } else if (elem.classList.contains("undead_block")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Flow-Station");
    } else if (elem.classList.contains("Fortia")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Fortia");
    } else if (elem.classList.contains("Jucc")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-JUCC");
    } else if (elem.classList.contains("mavia")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Mavia");
    } else if (elem.classList.contains("memepad")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-MemePad");
    } else if (elem.classList.contains("Midas")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-midas");
    } else if (elem.classList.contains("Nafter")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-nafter");
    } else if (elem.classList.contains("STO")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-stoplatform");
    } else if (elem.classList.contains("maviawwwwwwwww")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Teo");
    } else if (elem.classList.contains("THEMIS")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-themis");
    } else if (elem.classList.contains("Topaz")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-topaz");
    } else if (elem.classList.contains("Treelion-App")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Treelion");
    } else if (elem.classList.contains("Tx8")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-TX8");
    } else if (elem.classList.contains("undead_block")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Undead_Block");
    } else if (elem.classList.contains("warena")) {
      bg.removeAttribute("class");
      bg.classList.add("mbg-Warena");
    } else {
    }
  });

  var span = document.getElementsByClassName("close-modal")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
}
