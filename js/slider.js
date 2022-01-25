(function(){

    // obtain differents things from the index
    const sliders = [...document.querySelectorAll(".testimony_body")]; // testimonies convert to an array
    const buttonNext = document.querySelector("#next"); // slider button next
    const buttonBefore = document.querySelector("#before"); // slider button before

    let value;

    // if the button next is pressed, we call the func 
    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    // if the button before is pressed, we call the func
    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector(".testimony_body--show").dataset.id; // obtain the current testimony by its id
        value = Number(currentTestimony); // set the value to the id converted to a number
        value += add; // add the value
        sliders[Number(currentTestimony) - 1].classList.remove("testimony_body--show"); // delete the class of the current element

        if(value === sliders.length+1 || value === 0){ // we are on the first testimony and the back is pressed
            value = value === 0 ? sliders.length  : 1; // send it to the 3rd slider
        }

        sliders[value - 1].classList.add("testimony_body--show"); // show the corresponded testimony by using the --show  pseudoclass

    }

})();