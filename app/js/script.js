$(document).ready(function(){
    $(".main-owl-top").owlCarousel({
        items: 1,
        // nav: true,
        autoplay: false,
        loop: true,
        dots: false,
    });
    $(".review-owl").owlCarousel({

        // nav: true,
        autoplay: false,
        loop: true,
        dots: true,
        responsive:{
            0 : {
                items: 1.2,
                margin: 15,
            },
            450 : {
                items: 2,
                margin: 15,
            }
        }
    });
    $(".news-owl").owlCarousel({

        // nav: true,
        autoplay: false,
        loop: true,
        dots: false,
        responsive:{
            0 : {
                margin: 15,
                items: 1,
            },
            450 : {
                margin: 30,
                items: 2,
            },
            750 : {
                margin: 30,
                items: 3,
            }
        }
    });
  });



  $('.main__slider-rightarrow').click(function() {
     $('.main-owl-top').trigger('next.owl.carousel');
})
$('.main__slider-leftarrow').click(function() {
    $('.main-owl-top').trigger('prev.owl.carousel');
})
  $('.main__news-rightbtn').click(function() {
     $('.news-owl').trigger('next.owl.carousel');
})
$('.main__news-leftbtn').click(function() {
    $('.news-owl').trigger('prev.owl.carousel');
})



let headerMenu = document.querySelector(".header__menu")
let questionItem = document.querySelectorAll(".main__questions-item")

headerMenu.addEventListener("click", ()=>{
    let containerMenu = document.querySelector(".container__menu")
    headerMenu.classList.contains("header__menu-picked") ? headerMenu.classList.remove("header__menu-picked") : headerMenu.classList.add("header__menu-picked")
    containerMenu.classList.contains("hidden") ? containerMenu.classList.remove("hidden") : containerMenu.classList.add("hidden")
})

questionItem.forEach(el=>{
    el.addEventListener("click", ()=>{
        let questionText = el.querySelector(".main__questions-text")
        questionText.classList.contains("hidden") ? questionText.classList.remove("hidden") : questionText.classList.add("hidden")
    })
})

let bouquetBtns = document.querySelectorAll(".main__bouquet-navbtn")
let bouquetCards = document.querySelectorAll(".main__cards")

bouquetBtns.forEach(el=>{
    el.addEventListener("click", ()=>{
        for(let i = 0 ; i<bouquetBtns.length; i++){
            bouquetBtns[i].classList.contains("main__bouquet-active") ? bouquetBtns[i].classList.remove("main__bouquet-active")  : null
        }
        for(let i = 0 ; i<bouquetCards.length; i++){
            bouquetCards[i].classList.contains("hidden") ? null : bouquetCards[i].classList.add("hidden")
           if( el.dataset.card == bouquetCards[i].dataset.card){
                bouquetCards[i].classList.remove("hidden")
                el.classList.add("main__bouquet-active")
           }
        }
    })
})

let filterSubtitle = document.querySelectorAll(".cataloglist__filter-subtitle")
// let filterItem = document.querySelector(".cataloglist__filter-subitem")

filterSubtitle.forEach(el=>{
    el.addEventListener("click", ()=>{
        let filterItem = el.parentElement.querySelector(".cataloglist__filter-subitem")

        filterItem.classList.contains("hidden") ? (filterItem.classList.remove("hidden"), el.classList.remove("rotated-item")) : (filterItem.classList.add("hidden"),  el.classList.add("rotated-item"))
    })
})
// filterSubtitle.addEventListener("click", ()=>{
//     filterItem.classList.contains("hidden") ? filterItem.classList.remove("hidden") :filterItem.classList.add("hidden")
// })

let allInputs = document.querySelectorAll(".cataloglist__filter-input input"), allLabels = document.querySelectorAll(".cataloglist__filter-input label")
for(let i = 0; i<allInputs.length; i++){
  allInputs[i].id = "checkbox "+i
  allLabels[i].htmlFor = "checkbox "+i
}

let mobileTitle = document.querySelectorAll(".mobilemenu__item-title")
//  = document.querySelectorAll(".mobilemenu__item-container")
let mobileContainer = document.querySelectorAll(".mobilemenu__item-container")
let burgerMenu = document.querySelector(".header__burger"), mobileMenu = document.querySelector(".container__mobilemenu")
let body = document.body
burgerMenu.addEventListener("click", ()=>{
    mobileMenu.classList.contains("hidden") ? (mobileMenu.classList.remove("hidden"), burgerMenu.style.backgroundImage = "url('../icns/pink-cross.svg')", body.style.overflow = "hidden") : (mobileMenu.classList.add("hidden"), burgerMenu.style.backgroundImage = "url('../icns/burger.svg')", body.style.overflow = "auto")
})
mobileTitle.forEach(el=>{
    el.addEventListener("click", ()=>{
        let mobileInnerContainer = el.parentElement.querySelector(".mobilemenu__item-container")
        mobileInnerContainer.classList.contains("hidden") ? mobileInnerContainer.classList.remove("hidden") : mobileInnerContainer.classList.add("hidden")
        el.classList.contains("rotated-item") ? el.classList.remove("rotated-item") : el.classList.add("rotated-item")
    })
})

let menuInfo = document.querySelector(".mobilemenu__info"), menuInfoTitle = document.querySelector(".mobilemenu__info-title"),
menuInfoContainer = document.querySelector(".mobilemenu__info-container")
if(menuInfoTitle != undefined){
    menuInfoTitle.addEventListener("click", ()=>{
        menuInfo.classList.contains("toTop") ? ( menuInfo.classList.remove("toTop"), document.documentElement.style.setProperty('--rotate', "0deg") ) : ( menuInfo.classList.add("toTop"), document.documentElement.style.setProperty('--rotate', "180deg") )

        menuInfoContainer.classList.contains("hidden") ? menuInfoContainer.classList.remove("hidden")  : menuInfoContainer.classList.add("hidden")
        mobileContainer.forEach(el=>{
            el.classList.contains("hidden") ? null :  el.classList.add("hidden")
        })
    })
}



let mobileSearchBtn = document.querySelector(".header__mobilesearch"), headerLogo = document.querySelector(".header__logo"),
headerSearch = document.querySelector(".header__search"), headerSearchClose = document.querySelector(".header__search-close"),
headerCall = document.querySelector(".header__call"), headerSearchBtn = document.querySelector(".header__search-btn")


mobileSearchBtn.addEventListener("click", ()=>{
    headerCall.classList.contains("hidden") ? null : headerCall.classList.add("hidden")
    headerLogo.classList.contains("hidden") ? null : headerLogo.classList.add("hidden")
    mobileSearchBtn.classList.contains("hidden") ? null : mobileSearchBtn.classList.add("hidden")
    headerSearchBtn.classList.contains("hidden") ? null : headerSearchBtn.classList.add("hidden")
    headerSearch.classList.add("mobile-header")

})

headerSearchClose.addEventListener("click", ()=>{
    headerCall.classList.contains("hidden") ?  headerCall.classList.remove("hidden") : null
    headerLogo.classList.contains("hidden") ?  headerLogo.classList.remove("hidden") : null
    mobileSearchBtn.classList.contains("hidden") ?  mobileSearchBtn.classList.remove("hidden") : null
    headerSearchBtn.classList.contains("hidden") ?  headerSearchBtn.classList.remove("hidden") : null
    headerSearch.classList.remove("mobile-header")
})

