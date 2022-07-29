var mybutton = document.getElementById("back-top");


window.onscroll = function () {
  scrollFunction()
};

async function scrollFunction() {
  var navbar = await document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navbar.classList.add("bg-primary");
    navbar.classList.remove("bg-transparent");
  } else {
    mybutton.style.display = "none";
    navbar.classList.remove("bg-primary");
    navbar.classList.add("bg-transparent");
  }
}

function scrollTopAnimated() {
  $("html, body").animate({scrollTop: "0"});
}

function displayField(obj) {
  if ($(obj).is(':checked')) {
    document.getElementById('soLuongInput').classList.remove("display-invisible");
    document.getElementById('soLuongInput').classList.add("display-visible");
    document.getElementById('loaiDichVuInput').classList.remove("display-invisible");
    document.getElementById('loaiDichVuInput').classList.add("display-visible");
  } else {
    document.getElementById('soLuongInput').classList.remove("display-visible");
    document.getElementById('soLuongInput').classList.add("display-invisible");
    document.getElementById('loaiDichVuInput').classList.remove("display-visible");
    document.getElementById('loaiDichVuInput').classList.add("display-invisible");
  }
}

async function display(str) {
  let val = await document.getElementById("loaiDichVu" + str).value;
  console.log(val);
  switch (val) {
    case "1":
      document.getElementById("standard-input" + str).classList.add("display-visible");
      document.getElementById("pool-input" + str).classList.add("display-visible");
      document.getElementById("floor-input" + str).classList.add("display-visible");
      document.getElementById("standard-input" + str).classList.remove("display-invisible");
      document.getElementById("pool-input" + str).classList.remove("display-invisible");
      document.getElementById("floor-input" + str).classList.remove("display-invisible");
      break;
    case "2":
      document.getElementById("standard-input" + str).classList.add("display-visible");
      document.getElementById("pool-input" + str).classList.add("display-invisible");
      document.getElementById("floor-input" + str).classList.add("display-visible");
      document.getElementById("standard-input" + str).classList.remove("display-invisible");
      document.getElementById("floor-input" + str).classList.remove("display-invisible");
      break;
    case "3":
      document.getElementById("standard-input" + str).classList.add("display-invisible");
      document.getElementById("pool-input" + str).classList.add("display-invisible");
      document.getElementById("floor-input" + str).classList.add("display-invisible");
      break;
  }
}

function showModal(id) {
  console.log(id);
  $(id).modal({
    fadeDuration: 1000,
    show: true
  });
}
