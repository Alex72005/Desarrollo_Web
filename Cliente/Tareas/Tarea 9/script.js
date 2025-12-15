const btnTheme = document.querySelector("#btnTheme")
const btnTutorial = document.querySelector("#btnTutorial")
const spanCurrentTheme = document.querySelector("#currentTheme")
const spanTutorialViewed = document.querySelector("#tutorialViewed")
const spanLastAccess = document.querySelector("#lastAccess")
const body = document.body

const savedTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", savedTheme)
spanCurrentTheme.textContent = savedTheme

btnTheme.addEventListener('click', () => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme == "light" ? "dark" : "light"
    localStorage.setItem("theme", newTheme)
    body.setAttribute("data-theme", newTheme)
    spanCurrentTheme.textContent = newTheme
})

function updateTutorialStatus() {
    const viewed = sessionStorage.getItem("tutorialViewed") === "true";
    spanTutorialViewed.textContent = viewed ? "Yes" : "No";
}

updateTutorialStatus();

btnTutorial.addEventListener("click", () => {
    sessionStorage.setItem("tutorialViewed", "true");
    updateTutorialStatus();
});

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

const lastAccess = getCookie("lastAccess");
spanLastAccess.textContent = lastAccess ? decodeURIComponent(lastAccess) : "First visit";

const now = new Date().toLocaleString();
setCookie("lastAccess", encodeURIComponent(now), 7);    