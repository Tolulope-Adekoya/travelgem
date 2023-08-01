// FOR THE NAVIGATION BAR
const scrollThreshold = 50; 
//this is to Change the value to the desired scroll threshold in viewport width, it does not have to be 50, this just works for me
window.addEventListener('scroll', function() {
  var object = document.getElementById('navColor');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var viewportWidth = window.innerwidth || document.documentElement.clientWidth;

  if (scrollPosition > viewportWidth * (scrollThreshold / 100)) {
    //if you just put the scrollposition it will automatically be taken a pixels 
    //we tweaked the scroll threshhold to be at a preferable point
    //using viewport heigt is confusing so we used viewport width
    // doing the math ie is scrollposition greater than (vieportwitdh X 0.5%) cuz we used 50 for scroll threshold
    object.style.backgroundColor = 'rgba(37, 95, 150, 0.9)';
    object.style.transition = 'all 0.4s ease';
  } else {
    object.style.backgroundColor = 'rgba(3, 7, 10, 0.1)';
  }
});
//FOR THE PRICE SLIDER
// JavaScript function to update the displayed value
function updateValue(value) {
  document.getElementById("rangeValue").
  textContent = value;  
}