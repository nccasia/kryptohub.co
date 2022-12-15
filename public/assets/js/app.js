function toggleNavbarMobile() {
  const btnToggle = document.querySelector(".menu-mobile");
  const btnIcon = btnToggle.querySelector("img");
  const navList = document.querySelector(".header .nav-bar .nav-list");
  const navItems = navList.querySelectorAll(".nav-link");

  btnToggle.addEventListener("click", () => {
    navList.classList.toggle("mobile");
    if (!navList.classList.contains("mobile"))
      btnIcon.src = "./assets/image/menu_mobile.png";
    if (navList.classList.contains("mobile"))
      btnIcon.src = "./assets/image/close_logo.png";
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("mobile");
      btnIcon.src = "./assets/image/menu_mobile.png";
    });
  });
}

function ourTeamSliderControl() {
  const MOBILE_WIDTH = 992;
  setUpSlider();

  window.addEventListener("resize", () => {
    setUpSlider();
  });

  const query = matchMedia("screen and (orientation:portrait)");
  query.onchange = (e) => {
    setUpSlider();
  };

  function setUpSlider() {
    if (window.innerWidth <= MOBILE_WIDTH) {
      initSlick();
    } else {
      unSlick();
    }
  }

  function initSlick() {
    $(".responsive")
      .not(".slick-initialized")
      .slick({
        dots: true,
        infinite: false,
        autoplay: true,
        mobileFirst: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }

  function unSlick() {
    setTimeout(() => {
      $(".responsive.slick-initialized")?.slick("unslick");
    }, 100);
  }
}

// function ourTeamModalControl() {
//   const members = [
//     {
//       name: "Trinh Duc Dai",
//       label: "Founder",
//       avatar: "assets/image/img-team/blockchain-developers-dai.jpg",
//       description: `Graduating from Vietnam National University, majoring in
//             Software
//             Engineering, Dai became
//             a dedicated developer. He is passionate about blockchain technology and
//             cryptocurrencies
//             right from the early steps of his career path. He has solid experience
//             in
//             Solidity and
//             Smart Contract. With more than 8 years working in software development,
//             especially
//             enterprise systems running across multiple technologies, Dai realizes
//             the
//             hidden potential
//             and the border of the traditional business model. It is the reason why
//             he
//             found Krybtohub
//             to modernize and power the traditional model with blockchain technology
//             and
//             cryptocurrencies.`,
//     },
//     {
//       name: "Dang An Thien",
//       label: "Co-Founder",
//       avatar: "assets/image/img-team/blockchain-developers-thien.jpg",
//       description: `Starting the career path as a management information system engineer after graduating from Vietnam University of Commerce, Thien also improved his knowledge and skills to become a software engineer. With a combination of deep knowledge in data analyzing, database monitoring, system managing and operating, and polished software development experience, Thien rapidly became a branch director of a software firm and IT outsourcing service company in Vietnam. Catching the wave of technology, he also has passion with blockchain technology, especially Defi and Defi related business.`,
//     },
//     {
//       name: "Luc Van Minh",
//       label: "Co-Founder",
//       avatar: "assets/image/img-team/blockchain-developers-minh.jpg",
//       description: `Minh was inspired to be Co-founder of Kryptohub when he saw that the cryptocurrency space deals with struggles to officially become part of the financial system. Minh is also an alumni of the Software Technology Department, Vietnam National University. He has nearly 10 years working in software development and a strong mix of skills in the areas of computer networking, cryptography, and algorithms and data structures. Especially, he gets professionalism in DEX, and DeFi Smart Contract security audit.`,
//     },
//     {
//       name: "Ma Van Tu",
//       label: "Co-Founder",
//       avatar: "assets/image/img-team/blockchain-developers-tu.jpg",
//       description: `Tu is also a talent Information Technology Bachelor from Vietnam National University. Although starting the journey as a .NET developer, Tu quickly realized that the client and the market need more than that. With the unlimited effort on improving capabilities and skills, Tu not only became a fullstack developer but also an expert in automation testing. During his 7-year career working in the field of  blockchain technology and cryptocurrency, he has brought remarkable results to his clients product with his intensive and extensive knowledge and experience in  ERC20, solidity language, and network (BSC, AVALANCHE).`,
//     },
//   ];

//   const modal = document.querySelector("#modal-our-team");
//   const modalName = modal.querySelector(".member-name-child");
//   const modalNameMobile = modal.querySelector(".member-name-child-mobile");
//   const modalLabel = modal.querySelector(".des-memmber-info");
//   const modalLabelMobile = modal.querySelector(".des-memmber-info-mobile");
//   const modalAvatar = modal.querySelector(".member-img img");
//   const modalAvatarMobile = modal.querySelector(".member-img-mobile img");
//   const modalDescription = modal.querySelector(".des");
//   const modalDescriptionMobile = modal.querySelector(".desMobile");

//   const listUser = document.querySelectorAll(".our-team .slider > div");
//   const modalOverlay = document.querySelector(".modal-overlay");

//   listUser.forEach((item, index) => {
//     item.addEventListener("click", () => {
//       modalName.textContent = members[index].name;
//       modalNameMobile.textContent = members[index].name;
//       modalAvatar.src = members[index].avatar;
//       modalAvatarMobile.src = members[index].avatar;
//       modalLabel.textContent = members[index].label;
//       modalLabelMobile.textContent = members[index].label;
//       modalDescription.textContent = members[index].description;
//       modalDescriptionMobile.textContent = members[index].description;
//       modal.style.display = "block";
//     });
//   });
//   modalOverlay.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
// }

// function ourTeamModalControlJP() {
//   const members = [
//     {
//       name: "Dai Trinh Duc",
//       nameNote: "(ダイ チン ドゥック)",
//       label: "創業者",
//       avatar: "assets/image/img-team/blockchain-developers-dai.jpg",
//       description: `ベトナム国家大学を卒業し、ソフトウェア工学を専攻。キャリアパスの初期段階からブロックチェーン技術や暗号通貨に情熱を注ぐ。Solidity とスマートコントラクトに豊富な経験を持つ。8年以上ソフトウェア開発、特に複数の技術にまたがる企業システムの開発に携わることで、従来のビジネスモデルとブロックチェーンの隠れた可能性を見出す。ブロックチェーン技術と暗号通貨で伝統的なモデルを変革するためKrybtohubを設立。`,
//     },
//     {
//       name: "Thien Dang An",
//       nameNote: "",
//       label: "共同創業者",
//       avatar: "assets/image/img-team/blockchain-developers-thien.jpg",
//       description:
//         "経営情報システムエンジニアとしてキャリアをスタートさせたThienは、ソフトウェアエンジニアとして急速に知識・技術を蓄える。データ分析、データベース監視、システム管理・運用の深い知識と、洗練されたソフトウェア開発の経験により、ブランチマネージャーに抜擢。ブロックチェーン技術、特にDefiとDefi関連ビジネスの開発に情熱を注ぐ。 ",
//     },
//     {
//       name: "Minh Luc Van",
//       nameNote: "(ミン ルック ヴァン)",
//       label: "共同創業者",
//       avatar: "assets/image/img-team/blockchain-developers-minh.jpg",
//       description:
//         `ミンは、暗号通貨をメジャーな金融システムにするべく、クリプトハブの共同設立者となった。ベトナム国家大学ソフトウェア技術学部の卒業生。ソフトウェア開発に10年近く従事。コンピュータネットワーク、暗号、アルゴリズムとデータ構造の分野で強力なスキルを兼ね備える。特に、DEX、DeFiスマートコントラクトのセキュリティ監査に専門的な知識を持つ。`
//     },
//     {
//       name: "Tu Ma Van",
//       nameNote: "(トゥ マ ヴァン)",
//       label: "共同創業者",
//       avatar: "assets/image/img-team/blockchain-developers-tu.jpg",
//       description: `ベトナム国家大学・ソフトウェア工学専攻・タレントプログラム(Talented- Programs)の卒業生。
//             .NET
//             開発者としてキャリアをスタート。クライアントの信頼を得ながら、圧倒的な努力によりスキルを向上させ続け、今ではフルスタックエンジニアだけでなく、自動化テストのプロフェッショナルとして活躍。ブロックチェーン技術と暗号通貨の分野での
//             7 年間のキャリアの中で、ERC20、Solidity言語、ネットワーク (BSC、AVALANCHE)
//             に関する広範な知識と経験により、さまざまなプロジェクトで目覚ましい結果を残す。`,
//     },
//   ];

//   const modal = document.querySelector("#modal-our-team");
//   const modalNameJP = modal.querySelector(".member-name-child-jp");
//   const modalNameJPMobile = modal.querySelector(".member-name-child-jp-mobile");
//   const modalNameNoteJP = modal.querySelector(".name-note");
//   const modalLabelJP = modal.querySelector(".des-memmber-info-jp");
//   const modalLabelJPMobile = modal.querySelector(".des-memmber-info-jp-mobile");
//   const modalAvatar = modal.querySelector(".member-img-jp img");
//   const modalAvatarJPMobile = modal.querySelector(".member-img-mobile-jp img");
//   const modalDescription = modal.querySelector(".des");
//   const modalDescriptionMobile = modal.querySelector(".desJPMobile");

//   const listUser = document.querySelectorAll(".our-team .slider > div");
//   const modalOverlay = document.querySelector(".modal-overlay");

//   // JP
//   listUser.forEach((item, index) => {
//     item.addEventListener("click", () => {
//       modalNameJP.textContent = members[index].name;
//       modalNameJPMobile.textContent = members[index].name;
//       modalNameNoteJP.textContent = members[index].nameNote;
//       modalAvatar.src = members[index].avatar;
//       modalAvatarJPMobile.src = members[index].avatar;
//       modalLabelJP.textContent = members[index].label;
//       modalLabelJPMobile.textContent = members[index].label;
//       modalDescription.textContent = members[index].description;
//       modalDescriptionMobile.textContent = members[index].description;
//       modal.style.display = "block";
//     });
//   });
//   modalOverlay.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
// }

function ourProjectControl() {
  $(function () {
    $(".project-item").click(function () {
      $(".project-item-game").hide();
      $("#game" + $(this).attr("target")).show();
      $(".project-item.project-item-active").removeClass("project-item-active");
      $(this).addClass("project-item-active");
    });

    $(".project-item-investment-logo").click(function () {
      $(".project-item-investment").hide();
      $("#investment" + $(this).attr("target")).show();
      $(
        ".project-item-investment-logo.project-item-investment-active"
      ).removeClass("project-item-investment-active");
      $(this).addClass("project-item-investment-active");
    });

    $(".project-item-finance-logo").click(function () {
      $(".project-item-finance").hide();
      $("#finance" + $(this).attr("target")).show();
      $(".project-item-finance-logo.project-item-finance-active").removeClass(
        "project-item-finance-active"
      );
      $(this).addClass("project-item-finance-active");
    });

    $(".project-item-insurance-logo").click(function () {
      $(".project-item-insurance").hide();
      $("#insurance" + $(this).attr("target")).show();
      $(
        ".project-item-insurance-logo.project-item-insurance-active"
      ).removeClass("project-item-insurance-active");
      $(this).addClass("project-item-insurance-active");
    });

    $(".project-item-education-logo").click(function () {
      $(".project-item-education").hide();
      $("#education" + $(this).attr("target")).show();
      $(
        ".project-item-education-logo.project-item-education-active"
      ).removeClass("project-item-education-active");
      $(this).addClass("project-item-education-active");
    });

    $(".project-item-entertaiment-logo").click(function () {
      $(".project-item-entertainment").hide();
      $("#entertainment" + $(this).attr("target")).show();
      $(
        ".project-item-entertaiment-logo.project-item-entertainment-active"
      ).removeClass("project-item-entertainment-active");
      $(this).addClass("project-item-entertainment-active");
    });
  });
}

function sendMail(token) {
  console.log('token=' + token);
  function printMess(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
  }

  // grecaptcha.ready(function () {
  //   var config = { action: 'submit' };
  //   grecaptcha.execute('6LcZhg8UAAAAAD0tWmrTzvVDZ-HLOLCdthN0dVLU', config)
  //     .then(function (token) {
  //       sendMail(token);
  //     });
  // });

  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const content = document.getElementById("content").value;
    const gresponse = grecaptcha.getResponse();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      content === "" ||
      gresponse === ""
    ) {
      document.getElementById("nameMiss").innerHTML =
        "Please fill out all required fields.";
      return;
    }

    Array.from(formEl.elements).forEach(
      (formElement) => (formElement.disabled = true)
    );
    const data = {
      email: document.getElementById("email").value,
      content: document.getElementById("content").value,
      gresponse: gresponse
    };
    const btnSubmit = formEl.querySelector('button[type="submit"]');
    const btnLoading = formEl.querySelector('button[type="button"]');
    btnSubmit.classList.add("d-none");
    btnLoading.classList.remove("d-none");

    fetch("https://email.ncc.asia/ncc-site-api-sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          formEl.reset();
          printMess(
            "nameSuccess",
            "Thank you, your submission has been received."
          );
          document.getElementById("nameMiss").remove();
        }
      })
      .catch((err) => {
        printMess(
          "nameError",
          "Oops, something went wrong. Please try again later."
        );
      })
      .finally(() => {
        formEl.reset();
        Array.from(formEl.elements).forEach(
          (formElement) => (formElement.disabled = false)
        );
        btnSubmit.classList.remove("d-none");
        btnLoading.classList.add("d-none");
      });
  });
}


function main() {
  toggleNavbarMobile();
  ourTeamSliderControl();
  ourProjectControl();
  sendMail();
}

main();
