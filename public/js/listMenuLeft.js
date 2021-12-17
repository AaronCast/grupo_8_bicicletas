window.addEventListener('DOMContentLoaded', (e) => {
    let indexArrow = document.querySelector('.more');
    let indexMenu = document.querySelector('.topList');

    indexMenu.style.display = 'none';
    
    indexArrow.addEventListener('click', (e) => {

        if(indexMenu.style.display == 'none'){
            indexMenu.style.display = 'block'
        }else{
            indexMenu.style.display = 'none'
        }
    });
})

window.addEventListener('DOMContentLoaded', (e) => {
    let userImageProfile = document.querySelector('.userImageProfile');
    let userSection = document.querySelector('.userSection');

    userSection.style.display = 'none'

    userImageProfile.addEventListener('click', (e) => {

        if(userSection.style.display == 'none'){
            userSection.style.display = 'block'
        }else{
            userSection.style.display = 'none'
        }
        console.log(e)
    }); 
})
