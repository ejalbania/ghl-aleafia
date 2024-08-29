console.log("Header did load");
const observer = new IntersectionObserver(entries => {
  	entries.forEach(entry => {
   		console.log("DID entries[0].isIntersecting" + entry.isIntersecting);

		if (entry.isIntersecting) {
			entry.target.classList.add('slide-in-show');
		}
	});
});
