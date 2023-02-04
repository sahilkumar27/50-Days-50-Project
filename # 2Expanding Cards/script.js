// query selector does is allows to selelct annything like class, h1, ID, whatever we want the pannels which have a class of pannel. Here querySelectorAll means selecting all the element directly, the pannels into what's called the node list, which is similiar to an array.
const x = document.querySelectorAll('.panel')

// open on chrome dev tools. It like printing the idnes of pannels
// console.log(x)

// i want to take my pannels and use it for each, which is a high order array method. And these methods take in a function as an argument so you could do function. humlog jo bhi iteration mein pass krna hai wo function mein krr do arrow k used se
x.forEach(panel =>{

    // agar koi bhi image mein click krenge too event listner hona chaiye  //when the click it happens we run the function witht the help of arrow
    panel.addEventListener('click', () => { 

        // calling function
        removeActiveClasses()

    // It gives the pannel of classes list and I'm going to add a class of active. jitne bhi class banye thee HTML mein sabko add krr k active krr doo
        panel.classList.add('active')




    } )  
})

function removeActiveClasses(){
    x.forEach(panel =>{
        // when we click, it;s going to remove all the active classes from
        panel.classList.remove('active')
    })
}


