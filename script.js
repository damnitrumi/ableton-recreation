//Menu More + Header
const moreMenu = ()=>{
    const $moreBtn = document.querySelector(".more-btn");
    const $navs = Array.from(document.getElementsByClassName("hide"));

    $moreBtn.addEventListener("click", expandNav)

    function expandNav(){
        $navs.forEach((elemento)=>{
            elemento.classList.toggle("active-block");
        })
        
        $moreBtn.textContent === "More +"? $moreBtn.textContent = "More -" : $moreBtn.textContent = "More +";
    }
}


//-------------------------------------------------------
//Menu Slide no responsivo
const menuSlideDown = () =>{
    const $menuBtn = document.querySelector(".menu-btn");
    const $preNav = document.querySelector(".pre-nav");
    const $headerWrapper = document.querySelector(".header-wrapper");

    $menuBtn.addEventListener("click", slideMenu);

    function slideMenu(){
        $preNav.classList.toggle("active-color");
        $menuBtn.classList.toggle("active-content-menu")
        $headerWrapper.classList.toggle("active-slide-down");
    }

    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 1024){
            if($preNav.className.indexOf("active-color") >= 0){
                $preNav.classList.remove("active-color");
            }
        
            if($menuBtn.className.indexOf("active-content-menu") >= 0){
                $menuBtn.classList.remove("active-content-menu");
            }

            if($headerWrapper.className.indexOf("header-wrapper active-slide-down-transition active-slide-down") >= 0){
                $headerWrapper.classList.remove("active-slide-down");
            }
        }
    })
}


//------------------------------------------------------
//Esconder/Mostrar Navbar no scroll
const hideNavOnScroll = () => {
    const $secondary = document.querySelector(".secondary");
    let maiorValor = 0;
    window.addEventListener("scroll", ()=>{
        let scrollWindow = window.scrollY;   
        if(scrollWindow > maiorValor){
            maiorValor = scrollWindow;
        }
        if(scrollWindow > maiorValor - 1 && scrollWindow >= 138 && $secondary.className === "secondary"){
         $secondary.classList.add("active-position");
        }else if(scrollWindow < maiorValor){
            if($secondary.className === "secondary active-position"){
                $secondary.classList.remove("active-position");
            }
            maiorValor = scrollWindow;      
        }
    })
}

//------------------------------------------------------
//Adicionar o iframe ao clicar no botão
const addVideoOnClick = () =>{
    const $videoWrapper = document.querySelector(".video-wrapper")

    $videoWrapper.addEventListener("click", ()=>{
        let iframe = document.createElement("iframe");
        const attributes = {
            "src": "https://www.youtube.com/embed/9SbnhgjeyXA",
            "title": "YouTube video player",
            "frameborder": "0",
            "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            "allowfullscreen": ""
        }
    
    function setAtt(elemento, obj){
        for (var key in obj){
            elemento.setAttribute(key, obj[key])
        }
    }

    setAtt(iframe, attributes);
    $videoWrapper.classList.add("active-video-content");
    $videoWrapper.style.paddingTop = "56.25%";
    $videoWrapper.firstElementChild.remove();
    $videoWrapper.appendChild(iframe);
    })
}

const app = () =>{
    moreMenu();
    menuSlideDown();
    hideNavOnScroll();
    addVideoOnClick();
}

app();