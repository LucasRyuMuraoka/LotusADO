// Cria uma nova instancia do objeto Swiper

const swiper = new Swiper('.swiper', {
  //Direcao do deslizamento
  direction: 'horizontal',

  // Loop infinito
  loop: true,

  // Ajusta o deslizamento automatico
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Ajusta o menu de navegacao
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Ajusta o zoom
  zoom: {
    // Ativa o zoom
    enabled: true,
    // Zoom máximo
    maxRatio: 1,
  },

  // Ajusta a escala
  scaleEffect: true,

  // Ajusta a opacidade do slide
  opacityEffect: true,

  // Ajusta a transicao do slide
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1.5,
    slideShadows: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,  
  },

  speed: 4000,
  grabCursor: true,
})