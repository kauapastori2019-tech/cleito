// Selecionando elementos principais
const previewImg = document.querySelector('.preview img'); // Imagem grande principal
const miniaturas = document.querySelectorAll('.miniaturas img'); // Miniaturas do produto
const branco = document.querySelector('.branco'); // Botões de cor 
const preto = document.querySelector('.preto'); // Botões de cor 
const cinza = document.querySelector('.cinza'); // Botões de cor 
const coracao = document.querySelector('.coracao > i'); // Ícone do coração

// Troca de miniatura
for(let i = 0; i < miniaturas.length; i++){
    miniaturas[i].addEventListener('click', (e) => {
        previewImg.src = e.target.src; // Atualiza a imagem principal
    });
}

// Cores Botão
let imgBranco = ["././img/branco/front.webp", "./img/branco/tras.webp","./img/branco/cara.webp"]
branco.addEventListener('click', (e)=>{
    previewImg.src=imgBranco[0];
    for(let i =0; i<miniaturas.length; i++){
        miniaturas[i].src = imgBranco[i];
    }
})

let imgPreto = ["././img/preto/front.webp", "./img/preto/tras.webp","./img/preto/cara.webp"]
preto.addEventListener('click', (e)=>{
    previewImg.src=imgPreto[0];
    for(let i =0; i<miniaturas.length; i++){
        miniaturas[i].src = imgPreto[i];
    }
})

let imgCinza = ["././img/cinza/front.webp", "./img/cinza/tras.webp","./img/cinza/cara.webp"]
cinza.addEventListener('click', (e)=>{
    previewImg.src=imgCinza[0];
    for(let i =0; i<miniaturas.length; i++){
        miniaturas[i].src = imgCinza[i];
    }
})



// Ativar/desativar coração
coracao.addEventListener('click', () => {
    if(coracao.classList.contains('fa-regular')) {
        coracao.classList.remove('fa-regular');
        coracao.classList.add('fa-solid');
    } else {
        coracao.classList.remove('fa-solid');
        coracao.classList.add('fa-regular');
    }
});
