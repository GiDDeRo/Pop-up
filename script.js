const submitBtn = document.getElementById("submit");
const popup = document.querySelector(".popup");
const btn = document.getElementById("button");

submitBtn.addEventListener("click", e=> {
    popup.classList.add("active")
});

btn.addEventListener("click", e=> {
    popup.classList.remove("active")
})