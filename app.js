const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.navbar__menu a');


menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  });
});

function scrollToAbout() {
  const contactSection = document.getElementById("about");
  const navbarHeight = document.querySelector("navbar").offsetHeight;
  const offsetTop = contactSection.offsetTop - navbarHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  const navbarHeight = document.querySelector("navbar").offsetHeight;
  const offsetTop = contactSection.offsetTop - navbarHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const unwrapParagraph = () => {
    const container = document.querySelector(".about-me__container");
    const paragraph = container.querySelector("p");

    if (paragraph) {
      while (paragraph.firstChild) {
        container.insertBefore(paragraph.firstChild, paragraph);
      }
      container.removeChild(paragraph);
    }
  };


  const checkWindowSize = () => {
    if (window.innerWidth <= 768) {
      unwrapParagraph();
    }
  };


  checkWindowSize();


  window.addEventListener("resize", checkWindowSize);
});