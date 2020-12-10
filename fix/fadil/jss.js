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

  // navbar
 const menuToggle = document.querySelector('.menu-toggle input');
 const nav = document.querySelector('nav ul');

 menuToggle.addEventListener('click',function(){
    nav.classList.toggle('nav-bar');
 })

//  konten gambar

$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.itemBox').show('1000');
    }
    else{
      $('.itemBox').not('.'+value).hide('1000');
      $('.itemBox').filter('.'+value).show('1000');
    }
  })
  //active class ketika di pilih
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})