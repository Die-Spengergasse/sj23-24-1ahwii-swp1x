const line = document.querySelector(".expandable-headlines");
const body = document.querySelector("body");
const main = document.querySelector("main");
const group = document.querySelector(".theme-group-name");
const elems = [line, body, main, group];
elems.forEach((e) => {
    console.log(e);
    console.log(e.offsetWidth);
});

const headings = document.querySelectorAll(".expandable-headlines li");
headings.forEach((h) => {
    h.addEventListener("click", (e) => toggleText(e.target));
});

function toggleText(target) {
    console.log("clicked, target:");
    console.log(target);
    if (target.isShowingMore) {
        target.style.whiteSpace = "nowrap";
        target.style.overflow = "hidden";
        target.style.textOverflow = "ellipsis";
        target.style.height = "1em";
        target.isShowingMore = false;
    } else {
        target.style.whiteSpace = "normal";
        target.style.overflow = "visible";
        target.style.textOverflow = "clip";
        target.style.height = "auto";
        target.isShowingMore = true;
    }
}
