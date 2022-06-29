document.addEventListener("DOMContentLoaded", function (event) {



  let allRadioInputs = document.querySelectorAll(".product__radio-item input"), allRadioLabels = document.querySelectorAll(".product__radio-item label")
  let radioCounter = 0, radioCount = 0
  for(let i = 0; i<allRadioInputs.length; i++){

    allRadioInputs[i].id = "radio"+i
    allRadioLabels[i].htmlFor = "radio"+i

   if(i>0 && allRadioInputs[i].parentElement.parentElement.classList != allRadioInputs[i-1].parentElement.parentElement.classList ){
        radioCount++
   }
   allRadioInputs[i].name = "radio" +radioCount
  }

  $('.product__slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-nav'
  });
  $('.product__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider-main',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  let btnMinus = document.querySelector(".product__minus")
  let inputValue = document.querySelector(".product__value")
  let btnPlus = document.querySelector(".product__plus")
  if(btnMinus != undefined){
    btnMinus.addEventListener("click", ()=>{
      if(parseInt(inputValue.value)>0){
        inputValue.value = parseInt(inputValue.value)-1
      }
    })
    btnPlus.addEventListener("click", ()=>{
      console.log("ad")
        inputValue.value = parseInt(inputValue.value)+1
    })
  }

  let btnShowAll = document.querySelector(".product__advance-all"), productCatalogList = document.querySelector(".product__filter")
  btnShowAll.addEventListener("click", ()=>{
    productCatalogList.classList.contains("hidden") ? productCatalogList.classList.remove("hidden") : productCatalogList.classList.add("hidden")
  })

  $( function() {
    var select = $( "#minbeds" );

    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
      min: 1,
      max: 7,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;
        goLeft(ui.value - 1)
      }
    });
    $( "#minbeds" ).on( "change", function() {
      slider.slider( "value", this.selectedIndex + 1 );

    });
  } );

let recentVal = 0, comp = 0
  function goLeft(val){

    var sliderval = document.querySelector(".product__sliderval")
    if(sliderval.style.left == ""){
      if(window.innerWidth <= 500){
        sliderval.style.left = "-5%"
      }
      else{
        sliderval.style.left = "-3%"
      }

    }
    if(val>recentVal){
      console.log(parseFloat(val))
      if(window.innerWidth <= 500){
        sliderval.style.left = parseFloat(sliderval.style.left) +16.2667*Math.abs(val-recentVal)+comp + "%"
        sliderval.innerHTML = 310*(val+1)
      }
      else{
        sliderval.style.left = parseFloat(sliderval.style.left) +16.6667*Math.abs(val-recentVal)+comp + "%"
        sliderval.innerHTML = 310*(val+1)
      }
      // if(val == 1){
      //   comp = 3
      // }

    }
    if(val<recentVal){
      // if(val == 0){
      //   comp = 3
      // }
      if(window.innerWidth <= 500){
        sliderval.style.left = parseFloat(sliderval.style.left) -16.2667*Math.abs(val-recentVal)+comp + "%"
        sliderval.innerHTML = 310*(val+1)
      }
      else{
        console.log(parseFloat(val))
        sliderval.style.left = parseFloat(sliderval.style.left) -16.6667*Math.abs(val-recentVal)+comp + "%"
        sliderval.innerHTML = 310*(val+1)
      }

    }
    recentVal = val
    comp = 0
    // console.log(sliderval.style.left)
}






})
  // let breakPoints = document.querySelectorAll(".productconstruct__breakpoint")
  // let leftMargin = 0
  // if(breakPoints != undefined){
  //   breakPoints.forEach(el=>{
  //     el.style.left = leftMargin + "%"
  //     leftMargin += 15.7
  //   })
  // }

