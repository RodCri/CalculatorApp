const buttons = document.querySelectorAll(".toggle-button");
const secondTheme = document.querySelector('#two');
const thirdTheme = document.querySelector('#three');
const arrBtns = [...buttons];

arrBtns.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.body.classList = ":root";
    } else if (index == 1) {
      document.body.classList = "theme2";
      secondTheme.style.backgroundColor = 'hsl(25, 98%, 40%)';
    } else {
      document.body.classList = "theme3";
      thirdTheme.style.backgroundColor = ' hsl(176, 100%, 44%)';
    }

    arrBtns
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});