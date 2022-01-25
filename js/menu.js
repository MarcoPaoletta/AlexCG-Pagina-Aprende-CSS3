(function(){

    // obtain differents things from the index
    const openButton = document.querySelector(".nav_menu"); // menu button
    const menu = document.querySelector(".nav_link"); // all the nav ul
    const closeMenu = document.querySelector(".nav_close"); // close button


    openButton.addEventListener("click" ,  ()=>{ // if the open button is pressed
        menu.classList.add("nav_link--show"); // add the class to the menu that will show it
    });

    closeMenu.addEventListener("click", () =>{ // if the close button is pressed 
        menu.classList.remove("nav_link--show"); // remove the class to the menu so that it will be hidden
    });

})();