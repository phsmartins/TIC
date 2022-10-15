const linkCSS = document.querySelector("#linkCSS");
const btnCircle = document.querySelector("#btnCircle");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    if (btnCircle.hasAttribute("class")) {
        btnCircle.removeAttribute("class");
        btnCircle.setAttribute("name", "liga");

        linkCSS.removeAttribute("href");
    } else if (btnCircle.hasAttribute("name")) {
        btnCircle.removeAttribute("name");
        btnCircle.setAttribute("class", "desliga");

        linkCSS.setAttribute("href", "style/style.css");
    }
});