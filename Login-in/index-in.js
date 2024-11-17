let index__banner = 1;
const changeImage = () => {
  let imgs = [
    "../components/assets/bgimg.jpg",
    "../components/assets/banner5.jpg",
    "../components/assets/banner6.jpg",
    "../components/assets/banner7.jpg",
    "../components/assets/banner8.webp",
  ];
  document.getElementById("banner").src = imgs[index__banner];
  index__banner++;
  if (index__banner == 5) {
    index__banner = 0;
  }
};
setInterval(changeImage, 6000);
  