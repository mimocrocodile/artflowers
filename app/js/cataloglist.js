let catalogBouquetContainer = document.querySelector(".cataloglist__bouquet-container")
let catalogBouquetPicked = document.querySelector(".cataloglist__bouquet-pickedtype")

catalogBouquetPicked.addEventListener("click", ()=>{
    catalogBouquetContainer.classList.contains("hidden") ? catalogBouquetContainer.classList.remove("hidden")  : catalogBouquetContainer.classList.add("hidden")

})

catalogBouquetContainer.addEventListener("click", (el)=>{
    catalogBouquetPicked.innerHTML = el.target.innerHTML
    catalogBouquetContainer.classList.add("hidden")
} )

let mainSortPicked = document.querySelector(".main__sort-picked")
let mainSortContainer = document.querySelector(".main__sort-container")


mainSortPicked.addEventListener("click", ()=>{
    mainSortContainer.classList.contains("hidden") ? ( mainSortContainer.classList.remove("hidden"), document.documentElement.style.setProperty('--rotate', "180deg"))  :( mainSortContainer.classList.add("hidden"), document.documentElement.style.setProperty('--rotate', "0deg"))
})

mainSortContainer.addEventListener("click", (el)=>{
    mainSortPicked.innerHTML = el.target.innerHTML
    document.documentElement.style.setProperty('--rotate', "0deg")
    mainSortContainer.classList.add("hidden")
})

let mobileFilter = document.querySelector(".cataloglist__mobilefilter"), filter = document.querySelector(".cataloglist__filter"),
filterClose = document.querySelector(".cataloglist__filter-close")
// let body = document.body
mobileFilter.addEventListener("click", ()=>{
    filter.style.display = "flex"
    body.style.overflow = "hidden"
})
filterClose.addEventListener("click", ()=>{
    filter.style.display = "none"
    body.style.overflow = "auto"
})

let resetBtn = document.querySelector(".cataloglist__filter-reset"), inputFilter = document.querySelectorAll(".cataloglist__filter-input input")

resetBtn.addEventListener("click", ()=>{
    inputFilter.forEach(el=>{
        el.checked = false

    })
})
