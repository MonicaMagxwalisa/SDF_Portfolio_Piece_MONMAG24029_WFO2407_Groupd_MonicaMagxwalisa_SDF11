const { animateCounters } = require("..");

// Alert dismissible function
document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
 document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
 setTimeout(function(){
   document.querySelector('.loopple-alert').remove();
 }, 1000);
};// Initialize the Intersection Observer
export const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.1 // Trigger the observer when 10% of the element is in view
});

