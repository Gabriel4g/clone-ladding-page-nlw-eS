const navbarScroll = document.querySelector("#navbar");
const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputEmail = document.querySelector("#email-input");
const buttonForm = document.querySelector("#btn-form");

function onScroll() {
    if(window.scrollY > 900) {
        navbarScroll.style.opacity = 1
        navbarScroll.style.pointerEvents = "auto"
    }

    else {
       navbarScroll.style.opacity = 0
       navbarScroll.style.pointerEvents = "none"
    }
}

document.addEventListener("scroll", () => {
    onScroll()
})

function verifyInputs() {
    if(inputEmail.value == "" || inputNumber.value == "" || inputName.value == "") {
        buttonForm.setAttribute("disabled", "disabled");
        buttonForm.style.cursor = "not-allowed"
    }

    else {
        buttonForm.style.cursor = "pointer"
        buttonForm.removeAttribute("disabled");
    }
}

setInterval(verifyInputs, 100)

buttonForm.addEventListener("click", (e) => {
    e.preventDefault();
})
