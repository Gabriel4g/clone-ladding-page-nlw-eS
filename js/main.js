const navbarScroll = document.querySelector("#navbar");

function onScroll() {
    if(window.scrollY > 900) {
        navbarScroll.style.opacity = 1
    }

    else {
       navbarScroll.style.opacity = 0
    }
}

document.addEventListener("scroll", () => {
    onScroll()
})