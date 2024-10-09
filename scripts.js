/*Menu responsivo*/

const btnsMenu = document.querySelectorAll('#btnMenu')
const containerMenu = document.querySelector('.header_menu')

/*Componentes do texto Sobre*/

const btnsLerMais = document.querySelectorAll('#btn_ler_mais')
const primeiroTexto = document.querySelector('.text_1')
const segundoTexto = document.querySelector('.text_2')

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

btnsLerMais.forEach((btnMais) => {
    btnMais.addEventListener('click', () => {
        if (btnMais.classList.contains('ler_mais_1')) {
            primeiroTexto.classList.toggle('text_total')
        } else {
            segundoTexto.classList.toggle('text_total')
        }
    })
})