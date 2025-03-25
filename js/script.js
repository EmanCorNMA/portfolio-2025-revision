// HERO IMAGE SCALE WIDTH ON SCROLL

// if (window.innerWidth > 767) {} 

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Get scroll position
  const newWidth = 0 + scrollY * 0.1112; // Scale width with scroll position
  const div = document.getElementById('scalable-div');

  // Apply the new width to the div (up to a max value)
  div.style.width = `${Math.min(newWidth, 100)}%`; // Set a maximum width of 500px
});





// CONTENT IMAGE SCALE WIDTH ON SCROLL
function scaleDivOnScroll(id) {
  window.addEventListener('scroll', () => {
    const div = document.getElementById(id);
    const rect = div.getBoundingClientRect();

    const offset = 900;
    const scrollY = Math.max(0, -rect.top + offset);

    const newWidth = 0 + scrollY * 0.1112; // Scale width with scroll position
    div.style.width = `${Math.min(newWidth, 100)}%`; // Set a maximum width of 100%

  });
}

// Apply the multiple ID's
scaleDivOnScroll('scalable-div-1');

















function scrollExpand(id, multiplier) {
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var scrollExpand = document.getElementById(id);
    var viewportHeight = window.innerHeight;

    // Get the position of the scrollExpand element relative to the viewport
    const elementRect = scrollExpand.getBoundingClientRect();
    const elementTop = elementRect.top + window.scrollY;

    // Offset position relative to when to start expanding the element

    var offset = elementTop - (viewportHeight / 4);

    console.log(offset);

    if (scrollPosition > offset) {
      // Adjust the height based on scroll position with a scaling factor
      var scalingFactor = 1; // Change this to adjust the expansion speed
      var newHeight = 0 + (scrollPosition - offset) * scalingFactor;

      // Apply the new height
      scrollExpand.style.height = newHeight + 'px';

      // Optional: Cap the height to 50% of the viewport height (50vh)
      var veiwportMultiplier = multiplier || 1; // Change this to adjust the offset
      if (newHeight > viewportHeight * veiwportMultiplier) {
        scrollExpand.style.height = (viewportHeight * veiwportMultiplier) + 'px';
      }
    } else {
      // If scroll is less than offset, keep the height at the initial value
      scrollExpand.style.height = '0';
    }
  });
}

// Apply the multiple IDs
scrollExpand('scrollexpand-1', 1);




// SCROLL PAST HERO SECTION LOGO SHRINKS

// Function to change the state of the logo
function changeLogoState(isIntersecting) {
  const logo = document.querySelector('.logo-mark');
  if (isIntersecting) {
    logo.classList.remove('scrolled');
  } else {
    logo.classList.add('scrolled');
  }
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    changeLogoState(entry.isIntersecting);
  });
}, {
  threshold: 0.8 // Adjust the threshold as needed
});

// Observe the hero section
const heroSection = document.querySelector('.column');
console.log(heroSection);
observer.observe(heroSection);






// SCROLL DOWN WEBPAGE HEADER HIDES - SCROLL UP HEADER SHOWS

let lastScrollY = window.scrollY;
const header = document.querySelector('header'); // Adjust the selector to match your header element
let timeoutId;
let isHiding = false; // Flag to track if the header is scheduled to be hidden

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    if (!isHiding) {
      isHiding = true;
      timeoutId = setTimeout(() => {
        header.classList.add('hidden');
      }, 500); // Adjust the delay as needed (200ms in this example)
    }
  } else {
    // Scrolling up
    clearTimeout(timeoutId);
    header.classList.remove('hidden');
    isHiding = false; // Reset the flag
  }

  lastScrollY = currentScrollY;
});



