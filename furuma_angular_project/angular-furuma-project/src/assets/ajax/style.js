var mybutton = document.getElementById("back-top");


window.onscroll = function() {scrollFunction()};
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
    $("html, body").animate({ scrollTop: "0" });
}
