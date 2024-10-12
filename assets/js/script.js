'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// Removed Testimonials Modal Functionality
// If you have a Testimonials section in the future, you can re-add this functionality accordingly.

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Fixed typo from data-selecct-value to data-select-value
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Custom select toggle functionality
if (select && selectItems.length > 0) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });

  // Add event to all select items
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// Filter function
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all") {
      item.classList.add("active");
    } else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Add event to all filter button items for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Removed Contact Form Functionality
// Since the Contact form is removed, no need to handle it.

// Clickable map image
const mapImageLink = document.querySelector("[data-map-img]");

if (mapImageLink) {
  mapImageLink.addEventListener("click", function (event) {
    // Redirect to Google Maps URL in a new tab
    window.open("https://www.google.com/maps/place/Vaishnavi+Devi+construction/@18.6734797,73.7347006,883m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2b140198fb621:0x143b11519f9f8d08!8m2!3d18.6734746!4d73.7372809!16s%2Fg%2F11mvrvt2rc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D", "_blank");
  });
}
// Get all images and modal elements
const images = document.querySelectorAll('.gallery-item img');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.modal-close');

// Add click event to each image
images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalContent.src = this.src; // Display the clicked image in the modal
  });
});

// Close modal when close button is clicked
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
if (navigationLinks.length > 0 && pages.length > 0) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove active class from all nav links
      navigationLinks.forEach(item => item.classList.remove("active"));

      // Add active class to the clicked nav link
      this.classList.add("active");

      // Get the target page from data-nav-link attribute
      const target = this.getAttribute("data-nav-link");

      // Remove active class from all pages
      pages.forEach(page => page.classList.remove("active"));

      // Add active class to the target page
      const targetPage = document.querySelector(`[data-page="${target}"]`);
      if (targetPage) {
        targetPage.classList.add("active");
        window.scrollTo(0, 0); // Scroll to top after navigation
      }
    });
  });
}
