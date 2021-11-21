window.addEventListener('load', (e) => {
    let indexArrow = document.querySelector('.more');
    let indexMenu = document.querySelector('.topList');
    let logoProfile = document.querySelector('.logoProfile');
    let userImageProfile = document.querySelector('.userImageProfile');
    let userSection = document.querySelector('.userSection');
    let loginSection = document.querySelector('.loginSection');

    indexMenu.style.display = 'none';
    loginSection.style.display = 'none';

    
    indexArrow.addEventListener('click', (e) => {

        if(indexMenu.style.display == 'none'){
            indexMenu.style.display = 'block'
        }else{
            indexMenu.style.display = 'none'
        }
    });

    logoProfile.addEventListener('click', (e) => {
        if(loginSection.style.display == 'none'){
            loginSection.style.display = 'block'
        }else{
            loginSection.style.display = 'none'
        }
        console.log(e)
    });
    // userImageProfile.addEventListener('click', (e) => {
    //     if(userSection.style.display == 'none'){
    //         userSection.style.display = 'block'
    //     }else{
    //         userSection.style.display = 'none'
    //     }
    //     console.log(e)

    // });
})