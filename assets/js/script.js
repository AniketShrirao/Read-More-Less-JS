/* Author: Aniket*/
// Select all read More Buttons
var readMoreBtn = document.querySelectorAll(".More");

// Assign TextToggle Function to Every Button
readMoreBtn.forEach(function(btn){
	btn.addEventListener('click',makeTextToggle);
})
// TextToggle function declaration
function makeTextToggle() {	
	if(this.innerText == "Read More") {
		this.innerText = "Read Less";
		this.previousElementSibling.children[0].classList = "readLess";
	} else {
		this.innerText = "Read More";
		this.previousElementSibling.children[0].classList = "readMore";
	}
}
