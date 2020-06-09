const moreInfo = document.querySelector(".more-info");
const deepmind = document.querySelector(".deepmind");
const stories = document.querySelector(".stories");
const music = document.querySelector(".music");
const text = document.querySelector(".text");
const splashImage = document.querySelector(".splash-image");

moreInfo.addEventListener("mouseover", () => {
  splashImage.src = "./images/index/more-info-splash.jpg";
});

deepmind.addEventListener("mouseover", () => {
  splashImage.src = "./images/index/deepmind-photography-splash.jpg";
});

stories.addEventListener("mouseover", () => {
  splashImage.src = "./images/index/stories-splash.jpg";
});

music.addEventListener("mouseover", () => {
  splashImage.src = "./images/index/music-splash.jpg";
});

text.addEventListener("mouseover", () => {
  splashImage.src = "./images/index/text-splash.jpg";
});
