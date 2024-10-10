/*Menu responsivo*/

const btnsMenu = document.querySelectorAll('#btnMenu')
const containerMenu = document.querySelector('.header_menu')

btnsMenu.forEach((btnMenu) => {
    btnMenu.addEventListener('click', () => {
        const menu = containerMenu.classList

        if (btnMenu.classList.contains('header_menu_head_close')) {
            if(menu.contains('header_menu_active')) {
                menu.remove('header_menu_active')
            }
        } else {
            menu.add('header_menu_active')
        }
    })
})

/*Componentes do texto Sobre*/

const btnsLerMais = document.querySelectorAll('#btn_ler_mais')
const primeiroTexto = document.querySelector('.text_1')
const segundoTexto = document.querySelector('.text_2')

btnsLerMais.forEach((btnMais) => {
    btnMais.addEventListener('click', () => {
        if (btnMais.classList.contains('ler_mais_1')) {
            primeiroTexto.classList.toggle('text_total')
        } else {
            segundoTexto.classList.toggle('text_total')
        }
    })
})

/*Componentes da seção Equipe*/
const cardsEquipes = document.querySelectorAll('.section_equipe_contain_cards_card')

cardsEquipes.forEach((cards) => {
    const cardFront = cards.getElementsByClassName('card_flip_front')
    const cardBack = cards.getElementsByClassName('card_flip_back')
    const btns = cards.querySelectorAll('.ler_mais_equipe')

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            cards.classList.toggle('section_equipe_contain_cards_card_rotate')
            cardFront.item(0).classList.toggle('card_flip_front_rotate')
            cardBack.item(0).classList.toggle('card_flip_back_rotate')
        })
    })
})