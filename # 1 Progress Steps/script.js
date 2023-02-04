// we are using JS because whenever we want click next then it will be moved next to another under proces

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

// put a dot here because it's the class circle. It's more than one, we're use query selector all which will bring them in as node list, which is similiar to an array
const circles = document.querySelectorAll('.circle')

// Here I'm using DOM
// We're going to call this cuurent active, which is going to represent whichever one is active, which will set to one by default
let currentActive = 1

// So, we'll take the next button and let's add an event listener onto it. And when it clicks, we're going to run a function and we want to take that whatever the current active is at the time and incerement++ by one.
next.addEventListener('click', () => {
    currentActive++
    // console.log(currentActive)

    // jitna length hai circle ka utna hi br increment hoga usee jada nhi
    if(currentActive > circles.length)
    {
        currentActive = circles.length
    }

    // So basically we're going to update the DOM
    update()
})

prev.addEventListener('click', () => {
    // previous ayenge isliye decrement krr rhe hai
    currentActive--

    // agar less 1 hua prev mera too humlog currentActive ko 1 pe hi rakhege starting pe, kyuki humlog currentactive ko 1 se chala rhe hai
    if(currentActive < 1)
    {
        currentActive = 1
    }

    // So basically we're going to update the DOM
    update()
})

function update()
{
    // take our circles, which is our node list, and we can loop through those with a for each and the four each taken in a function.
    circles.forEach((circle, idx) => {
        
        // So for each circle, I'm going to check to see if the index of that particular circle less than the currentActive
        if(idx < currentActive)
        {
            // If that's so, then I'm going to add the active class onto it.
            circle.classList.add('active')
        }
        else{
            // then we want to take a circle and remove the class, so classLost.remove
            circle.classList.remove('active')
        }
    })

    // when forEach loop terminated then get all of the active circles because we know, once we click this active is on now on all of these circles.
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'  //it will like width of the progress 50,75,100 and so on upto the end of the circle. Here the width around 33%, 66% and so on

    // check the current active 
    if(currentActive==1){
        prev.disabled = true
    }
    // if it's equal to total length of circles, so at the end we'll disable the next button
    else if(currentActive == circles.length){
        next.disabled = true
    }
    // jab last tak click krr k pouche ge too mera next button disable ho or jab starting krrenge too mera previous button disabled ho
    else{
        prev.disabled = false
        next.disabled = false
    }
}