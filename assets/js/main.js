// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element
    throw new Error(`smthing get wrong ${selecot} make sure is correctly`)
}

const scrollHeader = () => {
    const headerEl = selectElement('#header');
    if(this.scrollY > 15) {
        headerEl.classList.add('activated')
    } else {
        headerEl.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);
//Nav styles on scroll
const menuToggleIcon = selectElement('#menu-toggle-icon')

function toggleMenu () {
    const mobileMenu = selectElement('#menu');
    menuToggleIcon.classList.toggle('activated');
    mobileMenu.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);


// Open menu & search pop-up
const searchFormContainer = selectElement('#search-form-container');
const searchBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');

searchBtn.addEventListener('click', ()=> {
    searchFormContainer.classList.add('activated')
})

formCloseBtn.addEventListener('click', (e) => {
    searchFormContainer.classList.remove('activated')
})

window.addEventListener('keyup', e => {
    if(e.key === 'Escape') {
        searchFormContainer.classList.remove('activated')
    }
})
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
const bodyEl = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme) {
    bodyEl.classList.add('light-theme');
}


themeToggleBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('light-theme');
    if(bodyEl.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive')
    } else {
        localStorage.removeItem('currentTheme');
    }
})
// Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        700: {
            slidesPerView: 2, 
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

