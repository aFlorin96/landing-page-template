const images = document.querySelectorAll("#gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModalBtn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function openModal(index) {
   currentIndex = index;
   modal.style.display = "block";
   modalImg.src = images[currentIndex].src;
}

function closeModal() {
   modal.style.display = "none";
}

function showNext() {
   currentIndex = (currentIndex + 1) % images.length;
   modalImg.src = images[currentIndex].src;
}

function showPrev() {
   currentIndex = (currentIndex - 1 + images.length) % images.length;
   modalImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
   img.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Chiudi con ESC
document.addEventListener("keydown", (e) => {
   if (e.key === "Escape") closeModal();
   if (e.key === "ArrowRight") showNext();
   if (e.key === "ArrowLeft") showPrev();
});

// * Hambuerger menu
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
   navList.classList.toggle("active");
});

if (navList.className === "active") {
   hamburger.innerHTML = `<i class="bi bi-x-lg"></i>`;
}
//* chiudi il menu qunado viene cliccato un link
const navItems = navList.querySelectorAll("li:not(.always-visible)");

navItems.forEach((item) => {
   item.addEventListener("click", () => {
      navList.classList.remove("active");
   });
});

const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// - Back to top arrow
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
      backToTop.classList.add("show");
   } else {
      backToTop.classList.remove("show");
   }
});

backToTop.addEventListener("click", (e) => {
   e.preventDefault();
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
