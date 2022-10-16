const removeCSSButton = document.querySelector("#removeCSSButton");
const linkCSS = document.querySelector("#linkCSS");

removeCSSButton.addEventListener("click", () => {
    if (linkCSS.hasAttribute("href")) {
        linkCSS.removeAttribute("href");
        linkCSS.classList.add("validation");
    } else if (linkCSS.hasAttribute("class")) {
        linkCSS.setAttribute("href", "style/style.css");
        linkCSS.removeAttribute("class");
    }
});
