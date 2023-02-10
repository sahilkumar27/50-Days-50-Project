const left = document.querySelector('.left')
const right = document.querySelector('.right')

// And then we also want to grab the container because that's where we're adding the classes to and removing the classes from
const container = document.querySelector('.container')

// here we're adding event lsitener on a mouse enter event, whcih is basically a hover, then we're call the arrow function and take the container, I don't need to put curly braces, since this is just one line in this function. Then calling hte classList and then add class of hover-left. So I'm just dynamically doing what I just manually did in the HTML
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))

// So we need to take care of removing it as well(left)
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// Same for the right that we're in the left part of hover. Adding
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

// Removing the right
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))