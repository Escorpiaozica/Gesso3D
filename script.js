document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      image: "https://source.unsplash.com/random/40x40?man=1",
      text: "\"Os painéis de gesso 3D transformaram minha sala! Qualidade impecável e fácil instalação. Recomendo a todos!\"",
    },
    {
      name: "Mariana Oliveira",
      image: "https://source.unsplash.com/random/40x40?woman=1",
      text: "\"Fiquei impressionada com o acabamento dos produtos. Deixaram meu ambiente muito mais sofisticado!\"",
    },
    {
      name: "Ricardo Santos",
      image: "https://source.unsplash.com/random/40x40?man=2",
      text: "\"Ótima experiência de compra! Atendimento excelente e entrega rápida. O gesso 3D realmente fez a diferença.\"",
    },
    {
      name: "Ana Souza",
      image: "https://source.unsplash.com/random/40x40?woman=2",
      text: "\"Produto de altíssima qualidade! Meu escritório ficou muito mais moderno com os painéis de gesso.\"",
    },
    {
      name: "Fernando Lima",
      image: "https://source.unsplash.com/random/40x40?man=3",
      text: "\"Super satisfeito com minha compra! Instalação prática e um acabamento incrível. Nota 10!\"",
    },
    {
      name: "Luciana Ribeiro",
      image: "https://source.unsplash.com/random/40x40?woman=3",
      text: "\"A textura e os detalhes do gesso 3D são surpreendentes! Minha casa ganhou um toque especial.\"",
    },
    {
      name: "Roberto Almeida",
      image: "https://source.unsplash.com/random/40x40?man=4",
      text: "\"Excelente custo-benefício! Fiquei muito feliz com o resultado final dos painéis na minha loja.\"",
    },
    {
      name: "Juliana Castro",
      image: "https://source.unsplash.com/random/40x40?woman=4",
      text: "\"Atendimento de primeira e produto maravilhoso! Meus clientes sempre elogiam a decoração do meu salão.\"",
    }
  ];

  const testimonialSlider = document.querySelector('.testimonial-slide');
  
  testimonials.forEach(testimonial => {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    testimonialElement.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name}">
      <div class="testimonial-content">
        <h3>${testimonial.name}</h3>
        <p>${testimonial.text}</p>
      </div>
    `;
    testimonialSlider.appendChild(testimonialElement);
  });
});
