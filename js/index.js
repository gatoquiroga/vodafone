'use strict'


let foto = 0
const carrousel = document.querySelector(`.Carrousel`)
const next = carrousel.querySelector(`.Next`)
const prev = carrousel.querySelector(`.Prev`)
const carrouselContainer = carrousel.querySelector(`.Carrousel-container`)
const carrouselImgs = carrousel.querySelectorAll(`.Carrousel-img`)
const carrouselPoints = carrousel.querySelectorAll(`.Carrousel-point`)
const carrouseLi = carrousel.querySelector(`.Carrousel-li`)

let anchoImg = 100 / carrouselImgs.length


next.addEventListener(`click`, () => {

      foto++
      if (foto >= carrouselImgs.length) {
            foto = 2
      }
      carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`
})

prev.addEventListener(`click`, () => {
      foto--

      if (foto >= carrouselImgs.length) {
            foto = 2
      }
      carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`
})



