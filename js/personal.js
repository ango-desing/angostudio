// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animar los elementos cuando entren en la vista
gsap.from('.card', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.card', // El trigger es el propio elemento
    start: 'top 80%', // Empieza cuando la parte superior del .card llega al 80% de la ventana
    end: 'top 50%', // Termina cuando el .card esté al 50% de la ventana
    scrub: true, // Hace que la animación se sincronicé con el scroll
    markers: false // Desactiva los marcadores de depuración (opcional)
  }
});

gsap.from('.about__img', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about__img', // El trigger es el .about__img
    start: 'top 80%',
    end: 'top 50%',
    scrub: true
  }
});

gsap.from('h2', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: 'h2',
    start: 'top 80%',
    end: 'top 50%',
    scrub: true
  }
});

gsap.from('h3', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: 'h3',
    start: 'top 80%',
    end: 'top 50%',
    scrub: true
  }
});

gsap.from('.skills__img', {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: 'power3.out',
  delay: 2.5,
  scrollTrigger: {
    trigger: '.skills__img', // El elemento que va a activar la animación
    start: 'top 80%', // Cuando el elemento llegue al 80% de la ventana
    end: 'top 50%', // Cuando el elemento esté al 50% de la ventana
    scrub: true, // Hace que la animación se sincronice con el scroll
  }
});