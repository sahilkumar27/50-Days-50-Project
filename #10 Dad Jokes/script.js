const jokeEl = document.getElementById('joke')
// So we're getting the button as well because we need an event listener on that
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke(){
    const config = {    
        headers: {
            Accept: 'application/json',
        },
    }
// Now, remember, fetch is a link, so we have to wait until it's done fetching. So we use await keyword. Now, whenver you use await insdie of a function, you have to label that function async
    //FETCH
    const res = await fetch('https://icanhazdadjoke.com', config)

    //RESPONSE
    const data = await res.json()

    // DATA
    jokeEl.innerHTML = data.joke
}



// this is where we want to make our request
// this is built into the browser, it's a native API, so we don't have to include any kind of CDN or anything
// And What we want to do is make a feature request to a specific URL. Now, remember if we just a get request to this without the except header of applications, Jason, it's going to give us HTML And that's not we want. So we can add in an object here with a headers value and headers is going to be an object{} and then we can put in for the key what the header we want(like a 'key' : 'value').

// USING .then()
// function generateJoke()
// {
//     // create config object
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     // calling the config object, this will give the promise back
//     fetch('https://icanhazdadjoke.com', config)
//     // remember what the fetch API we get the response, You can call us whatever u want Response. this is an arrow function and we just want to call Resource Jason to get the Jason Data
//         .then((res) => res.json())

//     // second dot gives the actual data
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }

// console.log data nhi krenge code block lagaenge arrow function k baad, take the jokeEL. that we brought above and set the innerHTML, LEt's set that to not just data because data is the entire object. We want data.joke because we're accessing the joke from the entire object

// humlog chhate hai ki jab button mein click kre too mera joke change ho jaye na ki mera page ko reload krr k...
