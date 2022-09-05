const navbarScroll = document.querySelector("#navbar");

function onScroll() {
    if(window.scrollY > 600) {
        navbarScroll.style.opacity = 1
    }

    else {
       navbarScroll.style.opacity = 0
    }
}

document.addEventListener("scroll", () => {
    onScroll()
})