window.addEventListener('load', (e) => {
    let indexArrow = document.querySelector('.more');
    let indexMenu = document.querySelector('.submenu ul');

    indexMenu.style.display = 'none'
  
    
    indexArrow.addEventListener('click', (e) => {
       
        let menuOff = indexMenu.style.display = 'none';
        let menuOn = indexMenu.style.display = 'block'
        menuOff
        if(menuOff){
            menuOn
        }else{
            menuOff
        }
        console.log(e)
        
        
    })
   
})