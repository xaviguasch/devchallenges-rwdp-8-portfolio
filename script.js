const recipeBlog = document.querySelector('#recipe-blog')
const myGalleryPage = document.querySelector('#my-gallery')
const checkoutPage = document.querySelector('#checkout-page')
const projectsSelected = document.querySelector('#projects-selected')

const cssBtn = document.querySelector('#css-btn')
const responsiveBtn = document.querySelector('#responsive-btn')
const allBtn = document.querySelector('#all-btn')

const cssProjArr = [recipeBlog]
const responsiveProjArr = [myGalleryPage, checkoutPage]
const allProjectsArr = [recipeBlog, myGalleryPage, checkoutPage]

const filterProjects = (e) => {
  const clickedBtn = e.target.id

  allProjectsArr.map((proj) => {
    proj.style.display = 'none'
  })

  if (clickedBtn === 'css-btn') {
    cssProjArr.map((proj) => {
      proj.style.display = 'unset'
    })
    projectsSelected.innerText = cssProjArr.length
  }
  if (clickedBtn === 'responsive-btn') {
    responsiveProjArr.map((proj) => {
      proj.style.display = 'unset'
    })
    projectsSelected.innerText = responsiveProjArr.length
  }
  if (clickedBtn === 'all-btn') {
    allProjectsArr.map((proj) => {
      proj.style.display = 'unset'
    })

    projectsSelected.innerText = allProjectsArr.length
  }
}

cssBtn.addEventListener('click', filterProjects)
responsiveBtn.addEventListener('click', filterProjects)
allBtn.addEventListener('click', filterProjects)
