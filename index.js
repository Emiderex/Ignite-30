// Initialize AOS (Animate On Scroll)
      AOS.init({
        duration: 1000,
        once: true, // Animate only once per scroll
      });

      const heroSection = document.querySelector("header.hero");
      const heroImages = [
        "./Assets/bg/Ignite30(2).jpg",
        "./Assets/bg/Ignite30(3).jpg",
        "./Assets/bg/Ignite30(7).jpg",
      ];

      let current = 0;

      function changeHeroBackground() {
        current = (current + 1) % heroImages.length;
        heroSection.style.backgroundImage = `url('${heroImages[current]}')`;
      }

      // Initial load
      heroSection.style.backgroundImage = `url('${heroImages[0]}')`;

      // Change every 5 seconds
      setInterval(changeHeroBackground, 5000);