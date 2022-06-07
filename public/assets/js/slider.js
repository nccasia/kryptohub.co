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
  myIndex[id] = index;
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[index - 1].style.display = "block";
  dots[index - 1].className += " w3-white";
  clearTimeout(timeout[id]);
  timeout[id] = setTimeout(() => {
    carousel(id);
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
  game: 0,
  investment: 0,
  finance: 0,
  insurance: 0,
  education: 0,
  entertainment: 0,
};
carousel("game");
carousel("investment");
carousel("finance");
carousel("insurance");
carousel("education");
carousel("entertainment");
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
// function showLoading() {
//   document.getElementById("mce-responses").style.display = "none";
//   var mailForm = document.getElementById("mce-EMAIL");
//   if (mailForm.value.length == 0) {
//     document.getElementById("want-mail").style.display = "block";
//   } else {
//     document.getElementById("want-mail").style.display = "none";
//     document.getElementById("loadingGif").style.display = "block";
//     setTimeout(function () {
//       document.getElementById("loadingGif").style.display = "none";
//       document.getElementById("mce-responses").style.display = "block";
//     }, 2000);
//   }
// }


// Slider
const portfolioContents = {
  game: [
    {
      image: "assets/image/img-bg-popup/nft-game-Mavia.jpg",
      title: "Heroes of Mavia",
      desc: "Mavia is a AAA MMO strategic multiplayer game allowing players to buy land, build a base and battle other players for RUBY. There exists three NFT types in the game — Land, Heroes and Statues, each of which can be bought and sold on the Mavia marketplace for MAVIA token, and the NFTs can only be upgraded by using the RUBY cryptocurrency. <br /> <br /> Technologies: Unity, Smartfox, Java Spring boot, WebGL, Smart contract, AWS, Postgres",
      link: "https://www.mavia.com/",
      linkName: "https://www.mavia.com/",
    },
    {
      image: "assets/image/img-bg-popup/nft-game-Undead_Block.jpg",
      title: "Undead Block",
      desc: "Undead Blocks is the world's first multiplayer kill-to-earn zombie survival game on Binance Smart Chain. <br /> <br /> Technologies: Photon, Unity, Smart contract, AWS",
      link: "https://undeadblocks.com/",
      linkName: "https://undeadblocks.com/",
    },
    {
      image: "assets/image/img-bg-popup/nft-game-Fortia.jpg",
      title: "Fortia",
      desc: "Fortia is one of the first high quality strategy blockchain games that incorporate Create-to-Earn ecosystem to promote our gamers and artists community. Our proprietary technology allows direct music streaming from connected wallets <br /> <br /> Technologies: Unity, Smartfox, Java Spring boot, WebGL, Smart contract, AWS, Postgres",
      link: "https://fortiagame.com/",
      linkName: "https://fortiagame.com/",
    },{
      image: "assets/image/img-bg-popup/nft-game-Warena.jpg",
      title: "Warena",
      desc: "Warena is the first personalized and 'play to earn' NFT Metaverse game <br /> <br /> Technologies: NestJs, MongoDB, Unity, Smart contract, AWS",
      link: "https://www.warena.io/#home",
      linkName: "https://www.warena.io/#home",
    },
    {
      image: "assets/image/img-bg-popup/nft-game-EpicWar.jpg",
      title: "Epic War",
      desc: "Epic War is a Cinematic Game built on blockchain with free-to-play-to-earn model. It offers players the thrill of first-person shooter action in a cutting-edge gaming environment. Scavenging settings, hundreds of mutant monsters, and a frantic in-game economy are among the game’s highlights. <br /> <br /> Technologies: Unity, photon, smart contract",
      link: "https://www.warena.io/#home",
      linkName: "https://www.warena.io/#home",
    },
  ],
  investment: [
    {
      image: "assets/image/img-bg-popup/cryptocurrency-MemePad.jpg",
      title: "Memepad",
      desc: "MemePad provides a completely new, systematized, and decentralized way of connecting token creators with community members to raise funds. It's a launchpad like no other, in that it combines and builds upon several elements inspired by other launchpads whilst also providing a unique edge in being tailored specifically to meme coins and microcaps that want to launch on BSC.",
      link: "https://memepad.co/overview",
      linkName: "https://memepad.co/overview",
    },
    {
      image: "assets/image/img-bg-popup/cryptocurrency-TX8.jpg",
      title: "TX8",
      desc: "Ecosystem to integrate with internal ERP<br /> <br />Technologies: SmartContract, ReactJS, GraphQL",
      link: "https://tx8.vn/lottery",
      linkName: "https://tx8.vn/lottery",
    },
    {
      image: "assets/image/img-bg-popup/cryptocurrency-Treelion.jpg",
      title: "Treelion",
      desc: "Green Digital Economy development using blockchain technology base on Ethereum network on mobile app Provide users ability to invest, donate on economy product using Ethereum tokens and Bitcoin, Apple Pay. Integration with Stripe payment gateway. Tracking product status details by scanning barcode on mobile. Build small game in main app, which enables users to plant, decorate and share trees on media and social network. <br /> <br /> Technologies: Blockchain - Etherium Network; Backend - Spring Boot, Maven, Liquibase, Swagger; DB - Postgres; Client - Android and IOS Swift, Game - Cocos2dx",
      link: "https://play.google.com/store/apps/details?id=com.treelion.trnwallet&hl=en&gl=US",
      linkName: "Application",
    },
  ],
  finance: [
    {
      image: "assets/image/img-bg-popup/fintech-outsourcing-topaz.jpg",
      title: "TOPAZ",
      desc: "A solution using Distributed Ledger Technology (DLT) to help financial institutions and surveyors digitize and streamline the processes of asset valuation, and also simplify the complexity of end-to-end workflows of the asset valuation and management industry. <br /> <br /> Technologies: Blockchain and DLT, Corda platform",
      link: "",
      linkName: "",
    },
    {
      image: "assets/image/img-bg-popup/fintech-outsourcing-atlas.jpg",
      title: "ATLAS",
      desc: "Atlas Elite, a DLT-based trade finance platform, is a fully digitized platform to accelerate your trade business by connecting corporates and financiers and all trade parties in one single place where operations are automated, transaction processing time is reduced with documents are digital-signed and committed. The platform requires minimal manual interaction, thanks to smart contract guided mechanisms. The use of DLT provides an audit trail for traceability, enhances transparency to workflows, mitigates credit risks in financing transactions, and facilitates lower fees and barriers to trade.<br /> <br /> Technologies: Angular, Typescript, Java, Blockchain",
      link: "",
      linkName: "",
    },
  ],
  insurance: [
    {
      image: "assets/image/img-bg-popup/blockchain-insurance-midas.jpg",
      title: "MIDAS",
      desc: "An Industry-wide DLT-based Motor Insurance Authentication Platform",
      link: "",
      linkName: "",
    },
    {
      image: "assets/image/img-bg-popup/blockchain-insurance-sto.jpg",
      title: "STO",
      desc: "The STO platform provides a tool to issuers to manage all the elements in the full Digital Security lifecycle. Especially, cover the issuance and compliance aspects for a Security Token Offering. <br /> <br /> Technologies: Java, Kotlin, Blockchain, Smart Contract",
      link: "",
      linkName: "",
    },
  ],
  education: [
    {
      image: "assets/image/img-bg-popup/blockchain-education-back-themis.jpg",
      title: "THEMIS",
      desc: "A Certificate Management and Verification Blockchain System. If your organization issues certificates, transcripts or any documents, you may consider bringing them to Themis, which is a global Blockchain system and the system of truth for authentic documents. <br /> <br /> Technologies: Blockchain, Spring Boost",
      link: "",
      linkName: "",
    },
    {
      image: "assets/image/img-bg-popup/blockchain-education-back-JUCC.jpg",
      title: "JUCC",
      desc: "Application to manage certificates of univerities, colleges and other education institutes. The system uses blockchain to manage and verify certificate. The application is used by employees, students and education institutes officiers. <br /> <br /> Technologies: Spring boot, Kotlin, Blockchain, Docker, Kubernete (K8s), DB Postgres",
      link: "",
      linkName: "",
    },
  ],
  entertainment: [
    {
      image: "assets/image/img-bg-popup/token-entertainment-back-nafter.jpg",
      title: "Nafter",
      desc: "Nafter is the NFT social network and marketplace for creators & fans to buy, sell, mint & collect NFTs <br /> <br /> Technologies: React redux, Javascript, AWS, Github, NodeJS, MongoDB, Blockchain",
      link: "https://nafter.io/landing",
      linkName: "https://nafter.io/landing",
    },
    {
      image: "assets/image/img-bg-popup/token-entertainment-back-EventX.jpg",
      title: "EventX",
      desc: "EventX provides tablet connected to wireless NFC readers for fast events. Pair the secure and sustainable NFC wearable with the EventX visitor app. Gain access to events & special access zones. Pay for drinks and food by swiping the NFC wearable along access control and PoS systems <br /> <br /> Technologies: NodeJs, ReactNative, ReactJS, MongoDB, Kafka, Redis, Mangopay, Kubernestes, Blockchains use stellarNetwork",
      link: "https://chinetwork.io/",
      linkName: "https://chinetwork.io/",
    },
  ],
};

let sliderPopup = {
  id: null,
  content: [],
  currentIndex: null
};
const popupSliderELe = document.querySelector("#popup-show-project");
const titleEle = popupSliderELe.querySelector(".title");
const desEle = popupSliderELe.querySelector(".des");
const linkEle = popupSliderELe.querySelector(".link");
const bgEle = popupSliderELe.querySelector(".bg-popup-project");

function initPopupSlider(currentBoxId) {
  sliderPopup.id = currentBoxId;
  sliderPopup.content = portfolioContents[currentBoxId];
}

function activePopUpSlider(index) {
  const currentBoxId = event.target.parentElement.id;
  if(sliderPopup && sliderPopup.id != currentBoxId){
    initPopupSlider(currentBoxId);
  }
  renderPopUpSlider(index);
}

function renderPopUpSlider(index){
  sliderPopup.currentIndex = index;
  const content = sliderPopup.content[index];
  titleEle.innerHTML = content.title;
  desEle.innerHTML = content.desc;
  linkEle.href = content.link;
  linkEle.innerHTML = content.linkName;
  popupSliderELe.style.backgroundImage = `url('${content.image}')`;
}

function prevRenderPopUpSlider(){
  if(sliderPopup.currentIndex === 0) sliderPopup.currentIndex = sliderPopup.content.length;
  renderPopUpSlider(sliderPopup.currentIndex - 1);
}

function nextRenderPopUpSlider(){
  if(sliderPopup.currentIndex === sliderPopup.content.length - 1) sliderPopup.currentIndex = -1;
  renderPopUpSlider(sliderPopup.currentIndex + 1);
}

//handle captcha
function reCaptchaOnFocus() {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript';
  script.src = 'https://www.google.com/recaptcha/api.js'
  head.appendChild(script);

  // remove focus to avoid js error:
  document.getElementById('mce-FNAME').removeEventListener('focus', reCaptchaOnFocus)
  document.getElementById('mce-LNAME').removeEventListener('focus', reCaptchaOnFocus)
  document.getElementById('mce-PHONE').removeEventListener('focus', reCaptchaOnFocus)
  document.getElementById('mce-EMAIL').removeEventListener('focus', reCaptchaOnFocus)
  document.getElementById('textarea-mess').removeEventListener('focus', reCaptchaOnFocus)
};
// add initial event listener to the form inputs
document.getElementById('mce-FNAME').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('mce-LNAME').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('mce-PHONE').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('mce-EMAIL').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('textarea-mess').addEventListener('focus', reCaptchaOnFocus, false);