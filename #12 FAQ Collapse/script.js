/* 
Bring in toggle buttons (querySelector.All)
Loop through nodelist (forEach)
Add click event (addEventListener)
Toggle the active class on the parent node (.parentNode & classList.toggle())
 */

// take the node list through forEach loop, So that each toogle I want to take that specific toggle and add an event listener onto it.
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {

    // I'm going to run a function and take the toggle, which is the button and I want to access the parent node and then i want to access the class list and then call the not remove. We want to call the toggle method and we want to toggle the active class and that's it.
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})