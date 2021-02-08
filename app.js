const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#slider__btn--left");
const btnRight = document.querySelector("#slider__btn--right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast); //Aqui le decimos que mueva la ultima imagen a la primera posicion o despues de empezar el slider.

const moveRight = () => {
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	(slider.style.marginLeft = "-200%"), (slider.style.transition = "all 0.5");
	setTimeout(() => {
		slider.style.transition = "none";
		slider.insertAdjacentElement("beforeend", sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 500);
};

const moveLeft = () => {
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	(slider.style.marginLeft = "0"), (slider.style.transition = "all 0.5");
	setTimeout(() => {
		slider.style.transition = "none";
		slider.insertAdjacentElement("afterbegin", sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
};

btnRight.addEventListener("click", () => {
	moveRight();
});

btnLeft.addEventListener("click", () => {
	moveLeft();
});

//Para hacerlo automatico, setInterval hace que esa porcion de codigo se ejecute cada cierta cantidad de tiempo
setInterval(() => {
	moveRight();
}, 4000);
