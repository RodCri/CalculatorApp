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

const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display--number');


btns.forEach(boton => {
  boton.addEventListener('click', () => {
    const btnClick = boton.textContent;
    console.log(display.textContent)
    console.log(btnClick)

    if (boton.id === "reset") {
      display.textContent = "0";
      display.classList.remove('error')
      return;
    }

    if (boton.id === "del") {
      if (display.textContent.length === 1 || display.textContent === "Syntax Error!") {
        display.textContent = "0";
        display.classList.remove('error')
      } else {
        display.textContent = display.textContent.slice(0, -1);
      }
      return;
    }
    if (boton.id === 'igual') {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = "Syntax Error!";
        display.classList.add('error');
      }
      return;
    }
    if (display.textContent === "0" || display.textContent === "Syntax Error!") {
      display.textContent = btnClick;
      display.classList.remove('error')
    } else {
      display.textContent += btnClick;
      display.classList.remove('error')
    }
  })
})