// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobilemenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobilemenu.classList.toggle('active');
    })
}); 

document.addEventListener("DOMContentLoaded", function() {
    // Hent hero-content elementet
    const heroContent = document.querySelector(".hero-content");
    
    // Legg til klassen som viser innholdet og flytter det inn fra venstre
    heroContent.style.opacity = "2";
    heroContent.style.transform = "translateX(0)";
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    // Hent img-elementet
    const img = document.querySelector(".hero .container img");
    
    // Legg til klassen som viser bildet og flytter det inn fra bunnen
    img.style.opacity = "1";
    img.style.transform = "translateY(0)";
  });

  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  
  function showSlide(index) {
      // Fjern 'active' klasse fra alle slides
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Legg til 'active' klasse til gjeldende slide
      slides[index].classList.add('active');
  }
  
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }
  
  // Start bildeskyvedelen
  showSlide(currentIndex);
  
  // Bytt til neste slide hver 3. sekund (3000 ms)
  setInterval(nextSlide, 3000);


  


  