document.getElementById('autoplay').play(); //auto play video

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lihat lebih banyak"; 
      moreText.style.display = "none";
    } else {
      
      dots.style.display = "none";
      btnText.innerHTML = "lebih sedikit"; 
      moreText.style.display = "inline";
    }
  }

  // navbar ketika di slide
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

  //nav responsive
  const menuSlide = document.querySelector('.btnspan input');
  const nav = document.querySelector('nav ul');

  menuSlide.addEventListener('click', function(){
    nav.classList.toggle('slide');
  })
//  konten gambar

$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.gambar').show('1000');
    }
    else{
      $('.gambar').not('.'+value).hide('1000');
      $('.gambar').filter('.'+value).show('1000');
    }
  })
  //active class ketika di pilih
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})


//slide header

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dotsajah = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dotsajah.length; i++) {
    dotsajah[i].className = dotsajah[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dotsajah[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}