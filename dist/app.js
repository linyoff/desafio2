"use strict";
//mostrando o menu navigation na versão mobile
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.addEventListener('click', () => {
    mobileNav === null || mobileNav === void 0 ? void 0 : mobileNav.classList.toggle('show');
});
//validação do email
function validateEmail() {
    const emailInput = document.getElementById("email-input");
    const message = document.getElementById("message");
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
// Seletores para o primeiro banner
const bannerImage = document.querySelector('.banner img');
const bannerTitle = document.querySelector('.banner-content h2:nth-child(2)');
const bannerText = document.querySelector('.banner .text-banner');
const btnPrevious = document.getElementById('btn-ant');
const btnNext = document.getElementById('btn-next');
// Seletores para o segundo banner
const banner2Image = document.querySelector('.banner2 img');
const banner2Title = document.querySelector('.banner2 .product-title');
const banner2Text = document.querySelector('.banner2 .text-banner');
const btnPrevious2 = document.getElementById('ant');
const btnNext2 = document.getElementById('next');
// Dados para os banners
const banners = [
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
const banners2 = [
    {
        image: 'images/banner2.jpg',
        title: 'Vita Classic Product',
        text: 'Discover the classic essence of our products.',
    },
    {
        image: 'images/banner2-img2.jpg',
        title: 'Winter Special',
        text: 'Enjoy the beauty of winter with our special collection.',
    }
];
// Índices de controle para cada banner
let currentBannerIndex = 0;
let currentBanner2Index = 0;
// Função para atualizar o primeiro banner
function updateBanner(index) {
    if (bannerImage && bannerTitle && bannerText) {
        bannerImage.classList.add('fade');
        bannerTitle.classList.add('fade');
        bannerText.classList.add('fade');
        setTimeout(() => {
            bannerImage.src = banners[index].image;
            bannerTitle.textContent = banners[index].title;
            bannerText.textContent = banners[index].text;
            bannerImage.classList.remove('fade');
            bannerTitle.classList.remove('fade');
            bannerText.classList.remove('fade');
        }, 800);
    }
}
// Função para atualizar o segundo banner
function updateBanner2(index) {
    if (banner2Image && banner2Title && banner2Text) {
        banner2Image.classList.add('fade');
        banner2Title.classList.add('fade');
        banner2Text.classList.add('fade');
        setTimeout(() => {
            banner2Image.src = banners2[index].image;
            banner2Title.textContent = banners2[index].title;
            banner2Text.textContent = banners2[index].text;
            banner2Image.classList.remove('fade');
            banner2Title.classList.remove('fade');
            banner2Text.classList.remove('fade');
        }, 800);
    }
}
// Funções de navegação para o primeiro banner
function showNextBanner() {
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    updateBanner(currentBannerIndex);
}
function showPreviousBanner() {
    currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
    updateBanner(currentBannerIndex);
}
// Funções de navegação para o segundo banner
function showNextBanner2() {
    currentBanner2Index = (currentBanner2Index + 1) % banners2.length;
    updateBanner2(currentBanner2Index);
}
function showPreviousBanner2() {
    currentBanner2Index = (currentBanner2Index - 1 + banners2.length) % banners2.length;
    updateBanner2(currentBanner2Index);
}
// Eventos de clique para o primeiro banner
btnPrevious === null || btnPrevious === void 0 ? void 0 : btnPrevious.addEventListener('click', showPreviousBanner);
btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener('click', showNextBanner);
// Eventos de clique para o segundo banner
btnPrevious2 === null || btnPrevious2 === void 0 ? void 0 : btnPrevious2.addEventListener('click', showPreviousBanner2);
btnNext2 === null || btnNext2 === void 0 ? void 0 : btnNext2.addEventListener('click', showNextBanner2);
// Inicializa os banners
updateBanner(currentBannerIndex);
updateBanner2(currentBanner2Index);
// Troca automática dos banners
setInterval(showNextBanner, 7000);
setInterval(showNextBanner2, 7000);
