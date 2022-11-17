$(document).ready(function(){
	  		$(".sidebar-form .call-action").click(function(){
	  				$(this).parents(".sidebar-form").toggleClass("show");
	  		});
	  	});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
	

function validateContactForm() {
	var valid = true;
  
	$(".info").html("");
	$(".input-field").css('border', '#e0dfdf 1px solid');
	var userName = $("#userName").val();
	var userEmail = $("#userEmail").val();
	var subject = $("#subject").val();
	var content = $("#content").val();
  
	if (userName == "") {
	  $("#userName-info").html("Required.");
	  $("#userName").css('border', '#e66262 1px solid');
	  valid = false;
	}
	if (userEmail == "") {
	  $("#userEmail-info").html("Required.");
	  $("#userEmail").css('border', '#e66262 1px solid');
	  valid = false;
	}
	if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
	  $("#userEmail-info").html("Invalid Email Address.");
	  $("#userEmail").css('border', '#e66262 1px solid');
	  valid = false;
	}
  
	if (subject == "") {
	  $("#subject-info").html("Required.");
	  $("#subject").css('border', '#e66262 1px solid');
	  valid = false;
	}
	if (content == "") {
	  $("#userMessage-info").html("Required.");
	  $("#content").css('border', '#e66262 1px solid');
	  valid = false;
	}
	return valid;
  }	
