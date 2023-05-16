feather.replace();

// NAVBAR SEARCH
const searchForm = document.querySelector(".chat-search-form");
const searchBox = document.querySelector("#chat-search-box");
const arrowClose = document.querySelector(".arrow-left");
document.querySelector(".search").onclick = () => {
  searchForm.classList.toggle("active");
  searchBox.focus();
};

const search = document.querySelector(".search");
document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

arrowClose.addEventListener("click", function () {
  searchForm.classList.remove("active");
});

// NAVBAR MORE
const moreForm = document.querySelector(".chat-more-form");
document.querySelector(".more").onclick = () => {
  moreForm.classList.toggle("active");
};

const more = document.querySelector(".more");
document.addEventListener("click", function (e) {
  if (!more.contains(e.target) && !moreForm.contains(e.target)) {
    moreForm.classList.remove("active");
  }
});

// SORT
const chatSort = document.querySelector(".chat-sort");
const recent = document.querySelector(".recent");
const longest = document.querySelector(".longest");
const recentText = document.querySelector("#recent");
const longestText = document.querySelector("#longest");

recentText.addEventListener("click", function () {
  recent.style.display = "none";
  longest.style.display = "block";
  recentText.style.display = "none";
  longestText.style.display = "block";
});

longestText.addEventListener("click", function () {
  longest.style.display = "none";
  recent.style.display = "block";
  longestText.style.display = "none";
  recentText.style.display = "block";
});

// NAVBAR
const chatNav = document.querySelectorAll(".chat-nav a");
console.log(chatNav);
chatNav.forEach((a) => {
  a.addEventListener("click", () => {
    chatNav.forEach((b) => {
      b.classList.remove("chat-nav-border");
    });
    a.classList.add("chat-nav-border");
  });
});
