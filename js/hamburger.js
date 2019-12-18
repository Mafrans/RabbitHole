/*

    Hamburger Menu Handler

*/


function initializeHamburger() {
    let hamburger = document.querySelector(".hamburger");
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown .content");

    if (document.body.clientWidth > 768) {
        dropdown.style["clip-path"] = makeClip(hamburger, 0);
    } else {
        dropdown.style["max-height"] = 0;
    }

    hamburger.addEventListener("click", () => {
        if (hamburger.classList.contains("active")) {
            hamburger.classList.add("deactivating");

            if (document.body.clientWidth > 768) {
                dropdown.style["clip-path"] = makeClip(hamburger, 0);
            } else {
                dropdown.style["max-height"] = 0;
            }

            setTimeout(() => {
                hamburger.classList.remove("active");
                hamburger.classList.remove("deactivating");
            }, 400);
        } else if (!hamburger.classList.contains("deactivating")) {
            hamburger.classList.add("active");

            if (document.body.clientWidth > 768) {
                dropdown.style["clip-path"] = makeClip(hamburger, "100vw");
            } else {
                dropdown.style["max-height"] = dropdownContent.offsetHeight + "px";
            }
        }
    });
}

function makeClip(el, size) {
    var o = el.getBoundingClientRect();
    var h = el.getBoundingClientRect().top;
    console.log(o);

    return `circle(${size} at ${Math.round(o.left + o.width/2 + 20)}px ${Math.round(o.top + o.height/2 - 50)}px)`;
}