
//mostrando o menu navigation na versão mobile
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon?.addEventListener('click', () => {
  mobileNav?.classList.toggle('show');
});

//validação do email
function validateEmail(): boolean {
  
  const emailInput = document.getElementById("email-input") as HTMLInputElement;
  const message = document.getElementById("message") as HTMLSpanElement;

  //regex p verificar o formato de email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //verificando se o campo está vazio
  if (!emailInput.value) {
    message.textContent = "Digite um email";
    message.style.color = "red";
    return false; //cancela o envio e mostra a msg
  }

  //verifica se o formato do email é válido
  if (!emailPattern.test(emailInput.value)) {
    message.textContent = "Digite um email válido";
    message.style.color = "red";
    return false; //cancela o envio e mostra a msg
  }

  //mensagem de sucesso caso o email seja válido
  message.textContent = "Subscription successful!";
  message.style.color = "green";
  
  //limpa o input
  emailInput.value = "";

  return false; //cancela o envio para mostrar a msg
}

// Interface para definir a estrutura de um banner
interface Banner {
  image: string;
  title: string;
  text: string;
}

// Seleciona os elementos necessários do HTML
const bannerImage = document.querySelector<HTMLImageElement>('.banner img');
const bannerTitle = document.querySelector<HTMLHeadingElement>('.banner-content h2:nth-child(2)');
const bannerText = document.querySelector<HTMLParagraphElement>('.text-banner');
const btnPrevious = document.getElementById('btn-ant');
const btnNext = document.getElementById('btn-next');

// Array com os dados dos banners
const banners: Banner[] = [
  {
    image: 'images/banner1.jpg',
    title: 'New Collection',
    text: 'We know how large objects will act, but things on a small scale.',
  },
  {
    image: 'images/banner1-img2.jpg',
    title: 'Winter Special',
    text: 'Experience the warmth in the cold season.',
  }
];

// Índice para controlar o banner atual
let currentBannerIndex = 0;

// Função para atualizar o banner com animação
function updateBanner(index: number) {
  if (bannerImage && bannerTitle && bannerText) {
    // Adiciona uma classe para animação de transição
    bannerImage.classList.add('fade');
    bannerTitle.classList.add('fade');
    bannerText.classList.add('fade');

    setTimeout(() => {
      bannerImage.src = banners[index].image;
      bannerTitle.textContent = banners[index].title;
      bannerText.textContent = banners[index].text;

      // Remove a classe de animação após a atualização
      bannerImage.classList.remove('fade');
      bannerTitle.classList.remove('fade');
      bannerText.classList.remove('fade');
    }, 500); // Tempo da animação (em milissegundos)
  }
}

//função para ir ao próximo banner
function showNextBanner() {
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  updateBanner(currentBannerIndex);
}

//ouvintes de eventos aos botões
btnPrevious?.addEventListener('click', () => {
  currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
  updateBanner(currentBannerIndex);
});
btnNext?.addEventListener('click', showNextBanner);

//exibir o primeiro banner
updateBanner(currentBannerIndex);

//chamando a função para a troca automática dos banners
setInterval(showNextBanner, 7000);

