const hamburgerButton = document.getElementById('hamburger-button');
const menu = document.getElementById('menu');
hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Function to animate counters
export function animateCounters(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const decimal = counter.getAttribute('data-decimal');
                const speed = 200; // Duration of the animation in milliseconds
                const increment = Math.ceil(target / (speed / 10)); // Increment per interval
                
                let currentCount = 0;
                
                const updateCount = () => {
                    if (currentCount < target) {
                        currentCount += increment;
                        if (decimal) {
                            counter.innerText = (currentCount / 1000).toFixed(decimal) + 'k';
                        } else {
                            counter.innerText = currentCount;
                        }
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = decimal ? (target / 1000).toFixed(decimal) + 'k' : target;
                        observer.unobserve(entry.target); // Stop observing after the animation
                    }
                };
                
                updateCount();
            });
        }
    });
}

// Observe the pricing section
const pricingSection = document.getElementById('Pricing');
if (pricingSection) {
    observer.observe(pricingSection);
}
