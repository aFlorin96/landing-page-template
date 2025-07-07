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

// * Hide contacts
const hideContacts = document.getElementById("hideContacts");
hideContacts.addEventListener("click", () => {
   const socialBtns = document.querySelector(".social-btns");
   if (socialBtns.style.display === "none" || !socialBtns.style.display) {
      socialBtns.style.display = "flex";
      hideContacts.innerHTML = `<i class="bi bi-arrow-left-square-fill"></i>`;
      behavior: "smooth";
   } else {
      socialBtns.style.display = "none";
      hideContacts.innerHTML = `<i class="bi bi-arrow-right-square-fill"></i>`;
      behavior: "smooth";
   }
});

window.addEventListener("scroll", () => {
   const socialBtns = document.querySelector(".social-btns");
   if (window.scrollY > 100) {
      socialBtns.style.display = "none";
      hideContacts.style.display = "block";
      hideContacts.innerHTML = `<i class="bi bi-arrow-right-square-fill"></i>`;
      behavior: "smooth";
   } else {
      socialBtns.style.display = "flex";
      hideContacts.innerHTML = `<i class="bi bi-arrow-left-square-fill"></i>`;
      behavior: "smooth";
   }
});

// * info section fade-in effect
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("fade-in");
      } else {
         entry.target.classList.remove("fade-in");
      }
   });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
