const menuIconElement = document.getElementById('menu-icon')
const menuCloseElement = document.getElementById('menu-close')
const menusElement = document.getElementById('menus')

const arrowProductElement = document.getElementById('arrow-product')
const arrowCompanyElement = document.getElementById('arrow-company')
const arrowConnectElement = document.getElementById('arrow-connect')

const productElement = document.getElementById('product')
const companyElement = document.getElementById('company')
const connectElement = document.getElementById('connect')

const submenuProductElement = document.getElementById('submenu-product')
const submenuCompanyElement = document.getElementById('submenu-company')
const submenuConnectElement = document.getElementById('submenu-connect')

menuIconElement.addEventListener('click', () => {
    menusElement.classList.add('menus--show')
    menuIconElement.classList.add('menu-icon--off')
    menuCloseElement.classList.add('menu-close--show')
})

menuCloseElement.addEventListener('click', () => {
    menusElement.classList.remove('menus--show')
    menuIconElement.classList.remove('menu-icon--off')
    menuCloseElement.classList.remove('menu-close--show')
})

// Evento para abrir menú

// menuIconElement.addEventListener('click', () => {
//     if (menusElement.classList.contains('menus--show')) {
//         menuIconElement.src = 'assets/images/icon-hamburger.svg';
//         menusElement.classList.remove('menus--show');
//     } else {
//         menuIconElement.src = 'assets/images/icon-close.svg';
//         menusElement.classList.add('menus--show');
//     }
// });

productElement.addEventListener('click', () => {
    submenuProductElement.classList.toggle('submenu__product--show')
    arrowProductElement.classList.toggle('menu__arrow--up')
})

companyElement.addEventListener('click', () => {
    submenuCompanyElement.classList.toggle('submenu__company--show')
    arrowCompanyElement.classList.toggle('menu__arrow--up')
})

connectElement.addEventListener('click', () => {
    submenuConnectElement.classList.toggle('submenu__connect--show')
    arrowConnectElement.classList.toggle('menu__arrow--up')
})