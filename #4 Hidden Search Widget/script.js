const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input = document.querySelector('.input')

button.addEventListener('click', () => {
    // when we have active class, we want to search, we have our class list and then there's a mathod called toggle to toggle(a class, basically just add and remove it/)
    search.classList.toggle('active')

    // set focus on the input, which we can just use the focus method
    input.focus()
    // jab humlog click krrenge search button pe too woo transition k sath open hoga or sath hi sath mera input search bar bhi khula ka(but it also focuses in there And if i clcik goes back)

     

})