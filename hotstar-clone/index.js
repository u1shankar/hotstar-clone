let movies = [
  {
    name: "Falcon and the Winter soldier",
    des: "This is a Marvel Movie by Malcolm Spellman",
    image: "images/slider 2.PNG"
  },
  {
    name: "Loki",
    des: "This is a Marvel Movie by Michael Waldron",
    image: "images/slider 1.PNG"
  },
  {
    name: "Luca",
    des: "This is a Disney Movie by Enrico Casarosa",
    image: "images/slider 5.PNG"
  },
  {
    name: "WandaVision",
    des: "This is a Marvel Movie by Jac Schaeffer",
    image: "images/slider 3.PNG"
  },
  {
    name: "Raya and The Last dragon",
    des: "This is a Disney Movie by Carlos López Estrada, Don Hall",
    image: "images/slider 4.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;
const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex += 1;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createslide();
}
setInterval(() => {
  createslide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
