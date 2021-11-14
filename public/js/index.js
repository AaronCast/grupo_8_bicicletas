window.addEventListener('load', (e) => {
    let indexArrow = document.querySelector('.more');
    let indexMenu = document.querySelector('.submenu ul');

    indexArrow.addEventListener('click', (e) => {
        indexMenu.style.display = 'none'
    })
})