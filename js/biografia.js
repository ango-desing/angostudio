// Animaciones GSAP
window.addEventListener('load', () => {
    // Animación para el div .sobre-mi
    gsap.to('.sobre-mi img', {
      opacity: 1,
      duration: 2,
      delay: 1, // Espera un segundo antes de iniciar la animación
      ease: 'power3.out'
    });
  
    // Animación para los elementos dentro del grid .about__container
    gsap.to('.about__container', {
      opacity: 1,
      duration: 2,
      delay: 1.5, // Espera 1.5 segundos después de la animación de la imagen
      ease: 'power3.out',
      stagger: 0.5 // Anima cada elemento del grid con un retraso
    });
  
    // Animación de la imagen dentro de .about__img
    gsap.from('.about__img img', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 2
    });
  
    // Animación de los textos dentro de .caja-texto
    gsap.from('.caja-texto', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 2.5
    });
  });
  