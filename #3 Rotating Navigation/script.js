const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// when we click at show-nav then it going to run a arrow function then we just want to take the container and from the class list, we want to add the class of the show.
open.addEventListener('click', () => container.classList.add('show-nav'))

// it is similar close (Add Remove)
close.addEventListener('click', () => container.classList.remove('show-nav'))