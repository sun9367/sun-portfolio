//맨위로
const topBtn = document.querySelector(".Top");

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });  
}