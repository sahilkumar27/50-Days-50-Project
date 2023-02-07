const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// it going to start for 0 to 100 
let load = 0

// we want to run this function is in interval, and I want it to run every 30 millisecond
let int = setInterval(blurring, 30)

 function blurring()
 {
    // load inceremet hote jayega agar humlog condition nhi lagayenge too ye infity times console mein chlta rhega
    load++

    if(load > 100){
        clearInterval(int)  
        //The clearInterval function in javascript is used to stop the event of the recurring calling of a function at a fixed delay set by the setInterval() function
    }
    
    // here we using DOM, template string'', 
    loadText.innerText = `${load}%`
    
    // jab laod krr rhe thee too fade out ho rha tha, too humlog ko blur se fade out krna hai too uske liye humlog opacity ka used krrenge. And this is going to be tricky because opacity value isn't going to be the load value because that goes to 0 to 100. Opacity goes from zero to one
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    
    // we have do same thing for the blurr beacuse I don't want the blurr to be 100px. I want to be 30, 30 is the max. So we have to map the 0 to 100, 30 to 0 because we're going to start blurred. So we want to start at 30px and bring down to zero when the load is done.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}

