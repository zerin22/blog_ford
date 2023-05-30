function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplaytimeout:100,
    responsiveClass:true,
    items: 1,
    nav: true,
    dots: false,
})


  