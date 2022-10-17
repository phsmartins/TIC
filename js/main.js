const removeCSSButton = document.querySelector("#removeCSSButton");
const linkCSS = document.querySelector("#linkCSS");

removeCSSButton.addEventListener("click", () => {
    if (linkCSS.hasAttribute("href")) {
        linkCSS.removeAttribute("href");
    } else if (!linkCSS.hasAttribute("href")) {
        linkCSS.setAttribute("href", "style/style.css");
    }
});
