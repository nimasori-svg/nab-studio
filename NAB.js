const menu=document.querySelector(".menu");

const sideMenu=document.querySelector(".side-menu");

const overlay=document.querySelector(".overlay");

const closeBtn=document.querySelector(".close-btn");

menu.onclick=()=>{

sideMenu.classList.add("active");

overlay.classList.add("active");

}

closeBtn.onclick=()=>{

sideMenu.classList.remove("active");

overlay.classList.remove("active");

}

overlay.onclick=()=>{

sideMenu.classList.remove("active");

overlay.classList.remove("active");

}

const gameCards = document.querySelectorAll(".game-card");

window.addEventListener("scroll", () => {

    gameCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }

    });

});3
