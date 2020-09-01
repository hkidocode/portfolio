//select all counters
const counters = document.querySelectorAll('.project__details__num');
const speed = 10000; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const targetValue = +counter.getAttribute('data-target');
		const count = +counter.textContent;

		// Lower inc to slow and higher to slow
		const inc = targetValue / speed; 

		// console.log(inc);
		// console.log(count);

		// Check if targetValue is reached
		if (count < targetValue) {
			// Add inc to count and output in counter
			counter.textContent = Math.ceil(count + inc);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.textContent = targetValue;
		}
	};

	updateCount();
});


