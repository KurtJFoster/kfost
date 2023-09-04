const container = document.getElementById('image-container');
let images = container.getElementsByTagName('img');
let scrollInterval;
let storedScrollLeft = 0; // Variable to store scroll position

// Continuously scroll images horizontally
function startScroll() {
  images = container.getElementsByTagName('img'); // Refresh the images collection
  container.scrollLeft = 0; // Reset scroll position to start

  scrollInterval = setInterval(function() {
    container.scrollLeft += 1; // Change the scroll speed as needed

    // Check if reached the end and reset to start
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
  }, 45); // Change the scroll interval as needed
}

startScroll();