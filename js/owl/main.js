//Em javaScript, "$" siginifica JQuery:
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10, //Espaçamento entre as Imagens
    nav:false, //Setinhas esquerda e direita
    responsive:{ //Quantidade de Imagens de acordo com o número de pixels
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})