const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// classList you can do add if you want to add a class, you can do remove one or you can toggle, what we want to toggle the active class

toggle.addEventListener('click', () => nav.classList.toggle('active'))


// take the NAV and we;re simply going to toggle the active class, means that if it's appiled, it'll remove it, if it's not applied, it will add it, so let's take a class list for this toggle.