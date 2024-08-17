const scriptURL =
  "https://script.google.com/macros/s/AKfycbwd8AxoIoDiEgNoLaqVlXx1Bp5ER612gU0wXV0BwWtqa8V4wvD9GLAfqCaU9Iuz5cHGzQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

let btn = document.querySelector("#pdf");

btn.addEventListener("click", () => {
  window.location.href = "assets/MD HARIS RESUME.pdf";
});

let instas = document.querySelectorAll(".insta");

instas.forEach((insta) => {
  insta.addEventListener("click", () => {
    window.location.href =
      "https://instagram.com/haris_._qamar?igshid=NGVhN2U2NjQ0Yg==";
  });
});

let linkedIn = document.querySelectorAll(".linkedin");
linkedIn.forEach((linkedin) => {
  linkedin.addEventListener("click", () => {
    window.location.href =
      "https://www.linkedin.com/in/mohammad-haris-5aa198281/";
  });
});

let gitHub = document.querySelectorAll(".github");

gitHub.forEach((github) => {
  github.addEventListener("click", () => {
    window.location.href = "https://github.com/mdharis98";
  });
});

let whatsapp = document.querySelectorAll(".whtsp");

whatsapp.forEach((whtsp) => {
  whtsp.addEventListener("click", () => {
    window.location.href =
      "http://wa.me/919889652910?text=hello+Mohammad+Haris+!+How+are+you+";
  });
});

let Email = document.querySelectorAll(".mail");

document.addEventListener("DOMContentLoaded", function () {
  var emailLinks = document.querySelectorAll(".mail");
  emailLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var emailAddress = "mohammadharis7704@gmail.com";
      var mailtoLink = "mailto:" + encodeURIComponent(emailAddress);
      window.location.href = mailtoLink;
    });
  });
});

const photos = [
  // "assets/haris.jpeg",
  // "assets/haris2.jpg",
  "assets/haris3.jpg",
  // "assets/haris4.jpg",
  // "assets/haris5.jpg",
  // "assets/haris6.jpg",
  // "assets/haris7.jpg",
];

function getRandPic() {
  const randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
}

window.addEventListener("load", () => {
  const randomPhoto = getRandPic();
  const imgElement = document.getElementById("randPic");
  imgElement.src = randomPhoto;
});
