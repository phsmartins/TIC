const linkCSS = document.querySelector("#linkCSS");
const div = document.getElementById("div");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
        div.setAttribute("name", "liga");

        linkCSS.removeAttribute("href");
    } else if (div.hasAttribute("name")) {
        div.removeAttribute("name");
        div.setAttribute("class", "desliga");

        linkCSS.setAttribute("href", "style/style.css");
    }
});