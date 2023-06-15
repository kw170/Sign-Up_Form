//resize event listener for the form
window.addEventListener('resize', updatePosition);
function updatePosition(){
    let title = document.querySelector('#title')
    let submitButton = document.querySelector('.submitButton')
    let formContainer = document.querySelector('.form-container')
    let windowWidth = window.innerWidth
    if(windowWidth > 1100){
        let newPosition = 300 - ((1745 - windowWidth) / 15)
        submitButton.style.right = newPosition + "px"

        newPosition = 100 - ((1745 - windowWidth) / 5)
        console.log(newPosition)
        formContainer.style.right = newPosition + "px"  

        newPosition = 340 - ((1745 - windowWidth) / 5)     
        title.style.right = newPosition + "px"    
        console.log(title.style.right)   
    }
}

