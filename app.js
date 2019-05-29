function animatedForm(){
    const arrows = document.querySelectorAll
    (".fa-arrow-right");
    arrows.forEach(arrow =>{
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent= arrow.parentElement;
            const nextForm= parent.nextElementSibling;
            
            //check for validation
            if (input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForm);
            }
            
        });
    });
}
function validateUser(user){
    if(user.value.length <6){
        console.log("not enough charaacters");
        error('rgb(189,87,87');
    }
    else{
        error('aquamarine');
        return true;
              }
}
function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.stle.backgroundColor = color;
}